import React, {useEffect, useState, useMemo} from 'react'
import { getLyricl, getSongDetail, getCommentList } from '@/api'
import { parseLyric } from '@/utils/lyric'
import formatSongs from '@/utils/song'
import { connect } from 'react-redux'
import { useParams, withRouter } from 'react-router-dom'
import { formatTime } from '@/utils/utils'
import { SongWrap, MainContent, ImageBg, SongComment, PlayProgressBar } from './style'
import Lyric from './components/lyric'
import Comment from '@/components/comment'
import ProgressBar from '@/components/progress/progressBar'
import * as actionCreators from '@/store/actionCreators'
import OptBar from '@/pages/playSong/components/optBar'
import usePlayer  from '@/components/hook/userPlayerHook'

const PlaySong = props => {

  let { id } = useParams()

  const { audioELE, currentSong, playing, currentTime, currentIndex, playList } = props
  const { setPlayingState, setCurrentTime, setCurrentIndex, setPlayList, setCurrentSong } = props

  const [ duration, setDuration ] = useState(0)
  const [ songList, setSongList ] = useState([])
  const [ songs, setSongs ] = useState({})
  const [ commentList, setCommentList ] = useState([])
  const [ hotCommentList, setHotCommentList ] = useState([])
  const [ lyric, setLyric ] = useState([])
  const [ nolyric, setNolyric ] = useState(false)
  // 自定义组件
  // const [count] = usePlayer(10)

  let percent = isNaN(currentTime / duration) ? 0 : currentTime / duration

  useEffect(() => {
    console.log(currentSong, 'currentSong')
    setDuration(currentSong.duration)
    audioELE.current.src = currentSong.url
  }, [currentSong, ])

  // useMemo
  const currentSongs = useMemo(() => {
    return playList[currentIndex]
  }, [currentIndex, playList])

  useEffect( () => {
    _getSongDetail(id)
    _getCommentList(id)
    _getLyric(id)
  }, [id, currentSong])

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

  const isPlaying = (list) => {
    const index = list.findIndex((item) => {
      return item.id == currentSong.id
    })
    return index > -1
  }

  const _getSongDetail = (id) => {
    getSongDetail(id).then(res => {
      const songsList = formatSongs(res.songs)
      setSongList(songsList)
      setSongs(songsList[0])
      if (!isPlaying(songsList)) {
        setPlayList(songsList)
        setCurrentIndex(0)
        setCurrentSong(songs)
      }
      document.title = currentSong.name
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

  const prev = () => {
    console.log('prev')
    let index = currentIndex - 1
    if (index === -1) {
      index = playList.length - 1
    }
    setCurrentIndex(index)
    if (!playing) {
      togglePlaying()
    }
  }

  const next = () => {
    const playListLength = playList.length
    console.log(playListLength, 'playListLength')
    if (playListLength === 1) {
      return loop()
    }
    let index = 0
    if (currentIndex === playListLength - 1) {
      index = 0
    } else {
      index = currentIndex + 1
    }
    setCurrentIndex(index)
    console.log(playListLength,index, 'next')
    if (!playing) {
      togglePlaying()
    }
  }

  const togglePlaying = () => {
    setPlayingState(!playing)
  }

  const loop = () => {
    audioELE.current.currentTime = 0
    audioELE.current.play()
    setPlayingState(true)
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
        <PlayProgressBar>
          <p>{formatTime(currentTime)}</p>
          <div className="progress_bar">
            <ProgressBar
              percentChange={percentChange}
              percent={percent}
            ></ProgressBar>
        </div>
        <p>{formatTime(currentSong.duration)}</p>
        </PlayProgressBar>
        <OptBar
          playing={playing}
          prev={prev}
          next={next}
          togglePlaying={togglePlaying}
        ></OptBar>
      </MainContent>
      <SongComment>
        <div className="comment_tit">精选评论</div>
        <Comment commentList={commentList} hotCommentList={commentList}/>
      </SongComment>
    </SongWrap>
  )

}

const mapStateToProps = (state) => ({
  audioELE: state.audioELE,
  currentSong: state.currentSong,
  playing: state.playing,
  currentTime: state.currentTime,
  currentIndex: state.currentIndex,
  playList: state.playList
})

const mapDispatchToProps = (dispatch) => ({
  setPlayingState(data) {
    dispatch(actionCreators.setPlayingState(data))
  },

  setCurrentTime(current_time) {
    dispatch(actionCreators.setCurrentTime(current_time))
  },

  setCurrentIndex(index) {
    dispatch(actionCreators.setCurrentIndex(index))
  },

  setPlayList(list) {
    dispatch(actionCreators.setPlayList(list))
  },

  setCurrentSong(song) {
    dispatch(actionCreators.setCurrentSong(song))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(PlaySong))
