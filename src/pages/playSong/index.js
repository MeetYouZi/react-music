import React, {useEffect, useState} from 'react'
import { getLyricl, getSongDetail, getCommentList } from '@/api'
import { parseLyric } from '@/utils/lyric'
import formatSongs from '@/utils/song'
import { connect } from 'react-redux'
import { useParams, withRouter } from 'react-router-dom'
import { SongWrap, MainContent, ImageBg } from './style'

const PlaySong = () => {

  let { id } = useParams()
  const [songList, setSongList] = useState([])
  const [songs, setSongs] = useState({})
  const [commentList, setCommentList] = useState([])
  const [hotCommentList, setHotCommentList] = useState([])
  const [lyric, setLyric] = useState([])
  const [nolyric, setNolyric] = useState(false)

  useEffect( () => {
    _getSongDetail(id)
  }, [id])
  useEffect( () => {
    _getCommentList(id)
  }, [id])

  useEffect( () => {
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

  return (
    <SongWrap>
      <MainContent>
        <ImageBg>
          <img className="bg_img" src={songs.image}/>
        </ImageBg>
        这里是歌词详情页
      </MainContent>
    </SongWrap>
  )

}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PlaySong))
