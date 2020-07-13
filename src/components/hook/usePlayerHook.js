import React, { useState } from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '@/store/actionCreators'

// 编写我们自己Hook，名字以use开头
const usePlayer = (props) => {
  const { audioELE, currentSong, playing, currentTime, currentIndex, playList } = props
  const { setPlayingState, setCurrentTime, setCurrentIndex, setPlayList, setCurrentSong } = props

  const loop = () => {
    audioELE.current.currentTime = 0
    audioELE.current.play()
    setPlayingState(true)
  }

  const togglePlaying = () => {
    setPlayingState(!playing)
  }

  const isPlaying = (list) => {
    const index = list.findIndex((item) => {
      return item.id == currentSong.id
    })
    return index > -1
  }

  // 返回包含了更多逻辑的 state 以及改变 state 方法的钩子
  return [isPlaying, { loop, togglePlaying }]
}

export default usePlayer

// const mapStateToProps = (state) => ({
//   audioELE: state.audioELE,
//   currentSong: state.currentSong,
//   playing: state.playing,
//   currentTime: state.currentTime
// })
//
// const mapDispatchToProps = (dispatch) => ({
//
//   setPlayingState(data) {
//     dispatch(actionCreators.setPlayingState(data))
//   },
//
//   setCurrentTime(current_time) {
//     dispatch(actionCreators.setCurrentTime(current_time))
//   }
// })
//
// connect(mapStateToProps, mapDispatchToProps)(usePlayer)
