import React, { useState } from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '@/store/actionCreators'

// 编写我们自己Hook，名字以use开头
const usePlayer = (initialValue) => {
  const [count, changeCount] = useState(initialValue)

  const decrease = () => {
    changeCount(count - 1)
  };

  const increase = () => {
    changeCount(count + 1)
  };

  const resetCounter = () => {
    changeCount(0)
  };

  // 返回包含了更多逻辑的 state 以及改变 state 方法的钩子
  return [count, { decrease, increase, resetCounter }]
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

export default connect(mapStateToProps, mapDispatchToProps)(usePlayer)
