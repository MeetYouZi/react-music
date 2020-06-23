import React, { useRef, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import  * as actionCreators from '@/store/actionCreators'
import { PlayerWarp } from './style'
import { withRouter } from 'react-router-dom'
import ProgressBar from '@/components/progress/progressBar'
import MiniPlayer from './miniPlayer'

const Player = props => {
  const [ duration, setDuration ] = useState(0)
  const { currentSong, playing, currentIndex, playList, currentTime } = props
  const { setPlayingState, setAudioELE, setCurrentTime } = props

  const audioRef = useRef()
  let percent = isNaN(currentTime / duration) ? 0 : currentTime / duration

  useEffect(() => {
    setAudioELE(audioRef)
  }, [])

  useEffect(() =>{
    setDuration(currentSong.duration)
    audioRef.current.src = currentSong.url
    if (playing) {
      setTimeout(() => {
        audioRef.current.play()
      })
    } else {
      audioRef.current.pause()
    }
  }, [currentIndex, playList, playing])

  useEffect(() =>{
    audioRef.current.src = currentSong.url
    playing ? audioRef.current.play() : audioRef.current.pause()
  }, [playing])

  const updateTime = e => {
    setCurrentTime(e.target.currentTime);
  }

  const percentChange = curPercent => {
    const newTime = curPercent * duration
    setCurrentTime(newTime)
    audioRef.current.currentTime = newTime
    if (!playing) {
      setPlayingState(true)
    }
  }

  const handleEnd = () => {

  }

  const handleError = () => {

  }

  const pause = () => {
    setPlayingState(false)
  }

  const readyPlaying = () => {

  }

  return (
    <PlayerWarp>
      <ProgressBar percent={percent} percentChange={percentChange}/>
      <MiniPlayer percent={percent}/>
      <audio
        ref={audioRef}
        onTimeUpdate={updateTime}
        onEnded={handleEnd}
        onError={handleError}
        onPause={pause}
        onPlaying={readyPlaying}
      ></audio>
    </PlayerWarp>
  )
}

const mapStateToProps = (state) => ({
  currentIndex: state.currentIndex,
  playList: state.playList,
  currentSong: state.currentSong,
  playing: state.playing,
  currentTime: state.currentTime
})

const mapDispatchToProps = (dispatch) => ({
  setPlayingState(data) {
    dispatch(actionCreators.setPlayingState(data))
  },

  setAudioELE(audioELE) {
    dispatch(actionCreators.setAudioELE(audioELE))
  },

  setCurrentTime(current_time) {
    dispatch(actionCreators.setCurrentTime(current_time))
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Player))
