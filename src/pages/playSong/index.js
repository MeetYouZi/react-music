import React, {useEffect, useState} from 'react'
import { getLyricl, getSongDetail, getCommentList } from '@/api'
import { parseLyric } from '@/utils/lyric'
import formatSongs from '@/utils/song'
import { connect } from 'react-redux'
import { useParams, withRouter } from 'react-router-dom'
import { SongWrap, MainContent, ImageBg } from './style'
import Lyric from './components/lyric'
import ProgressBar from '@/components/progress/progressBar'
import * as actionCreators from '@/store/actionCreators'
import usePlayer from '@/components/hook/userPlayerHook'

const PlaySong = props => {

  let { id } = useParams()

  const { audioELE, currentSong, playing, currentTime } = props
  const { setPlayingState, setCurrentTime } = props

  const [ duration, setDuration ] = useState(0)
  const [ songList, setSongList ] = useState([])
  const [ songs, setSongs ] = useState({})
  const [ commentList, setCommentList ] = useState([])
  const [ hotCommentList, setHotCommentList ] = useState([])
  const [ lyric, setLyric ] = useState([])
  const [ nolyric, setNolyric ] = useState(false)
  // 自定义组件
  const [count, controlCount] = usePlayer(10)
  console.log()

  let percent = isNaN(currentTime / duration) ? 0 : currentTime / duration

  useEffect(() => {
    setDuration(currentSong.duration)
    audioELE.current.src = currentSong.url
  }, [currentSong])

  useEffect( () => {
    _getSongDetail(id)
    _getCommentList(id)
    _getLyric(id)
  }, [id])

  // 获取歌词
  const _getLyric = (id) => {
    getLyricl(id).then(res => {
      if (res.nolyric) {
        setNolyric(true)
      } else {
        setNolyric(false)
        setLyric(parseLyric(res.lrc.lyric))
      }
      // silencePromise(this.audioEle.play())
    })
  }
  const _getSongDetail = (id) => {
    getSongDetail(id).then(res => {
      const songsList = formatSongs(res.songs)
      setSongList(songsList)
      setSongs(songsList[0])
      // document.title = this.currentSong.name
      // if (!this.isplaying(this.songList)) {
      //   this.selectPlay({
      //     list: this.songList,
      //     index: 0
      //   })
      // }
      // setTimeout(() => {
      //   this.selectPlay({
      //     list: this.songList,
      //     index: 0
      // }, 1000)
      // })
    })
  }
  const _getCommentList = (id) => {
    getCommentList(id).then(res => {
      setCommentList(res.comments)
      setHotCommentList(res.hotComments)
    })
  }

  const percentChange = curPercent => {
    const newTime = curPercent * duration
    setCurrentTime(newTime)
    audioELE.current.currentTime = newTime
    if (!playing) {
      setPlayingState(true)
    }
  }

  return (
    <SongWrap>
      <MainContent>
        <ImageBg>
          <img className="bg_img" src={songs.image}/>
        </ImageBg>
        <div className="main_wrap">
          <div className="song_info">
            <h1 className="song_name">{songs.name}</h1>
            <h1 className="sing_name">{songs.singer}</h1>
          </div>
          {
            nolyric ? <div className="imgBox">
              <img className="bg_img_cover" src={songs.image}/>
            </div> : ''
          }
          <Lyric lyric={lyric} nolyric={nolyric}/>
        </div>
        <ProgressBar
          percentChange={percentChange}
          percent={percent}
        ></ProgressBar>

      </MainContent>
    </SongWrap>
  )

}

const mapStateToProps = (state) => ({
  audioELE: state.audioELE,
  currentSong: state.currentSong,
  playing: state.playing,
  currentTime: state.currentTime
})

const mapDispatchToProps = (dispatch) => ({
  setPlayingState(data) {
    dispatch(actionCreators.setPlayingState(data))
  },

  setCurrentTime(current_time) {
    dispatch(actionCreators.setCurrentTime(current_time))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PlaySong))