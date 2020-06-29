import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { withRouter, useParams } from 'react-router-dom'
import { getListDetail, getSongDetail } from '@/api'
import formatSongs from '@/utils/song'
import MusicPlayList from '@/components/musicPlayList'
import {OptBox, TopWrap} from './style'

const Music = props => {
  const [playInfo, setPlayInfo] = useState({})
  const [songList, setSongList] = useState([])
  let { id } = useParams()
  const MAXLENGTH = 100

  const _getListDetail = () => {
    getListDetail({ id: id }).then(res => {
      setPlayInfo(res.playlist)
      document.title = playInfo.name
      // _getSongDetail(playInfo)
    })
  }

  const _getSongDetail = (playInfo) => {
    const trackIds = playInfo.trackIds.map(({ id }) => id)
    getSongDetail(trackIds.slice(0, MAXLENGTH)).then(res => {
      setSongList(formatSongs(res.songs))
    })
  }

  useEffect(() => {
    _getListDetail()
  }, [id])

  useEffect(() => {
    playInfo.trackIds && _getSongDetail(playInfo)
  }, [playInfo])

  return (
    <>
      <TopWrap>
        <img className="top_wrap_bg" src={playInfo.coverImgUrl}/>
      </TopWrap>
      <OptBox>
      </OptBox>
      <MusicPlayList musicList={songList}/>
    </>
  );
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Music))
