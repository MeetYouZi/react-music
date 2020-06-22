import React, { useRef, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import  * as actionCreators from '@/store/actionCreators'
import { PlayerWarp } from './style'
import { withRouter } from 'react-router-dom'
import ProgressBar from '@/components/progress/progressBar'

const MiniPlayer = props => {
  const [ currentTime, setCurrentTime ] = useState(0)
  const [ duration, setDuration ] = useState(0)
  const { currentSong, playing, currentIndex, playList } = props
  const { setPlayingState, setAudioELE } = props

  const audioRef = useRef()
  let percent = isNaN(currentTime / duration) ? 0 : currentTime / duration

  useEffect(() => {
    setAudioELE(audioRef)
  }, [])

  useEffect(() =>{
    setDuration(currentSong.duration)
    audioRef.current.src = currentSong.url
    playing ? audioRef.current.play() : audioRef.current.pause()
  }, [currentIndex, playList])

  useEffect(() =>{
    audioRef.current.src = currentSong.url
    console.log(audioRef.current.src)
    playing ? audioRef.current.play() : audioRef.current.pause()
  }, [playing])

  const updateTime = e => {
    setCurrentTime(e.target.currentTime);
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
      <ProgressBar percent={percent}/>
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
  playing: state.playing
})

const mapDispatchToProps = (dispatch) => ({
  setPlayingState(data) {
    dispatch(actionCreators.setPlayingState(data))
  },

  setAudioELE(audioELE) {
    dispatch(actionCreators.setAudioELE(audioELE))
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MiniPlayer))
