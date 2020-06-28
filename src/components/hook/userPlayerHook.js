import React, { useState } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import * as actionCreators from '@/store/actionCreators'

// 编写我们自己Hook，名字以use开头
const usePlayer = (props) => {
  const { audioELE, currentSong, playing, currentTime } = props
  const { setPlayingState, setCurrentTime } = props

  const [ duration, setDuration ] = useState(0)
  let percent = isNaN(currentTime / duration) ? 0 : currentTime / duration

  // 返回包含了更多逻辑的 state 以及改变 state 方法的钩子
  return [percent, audioELE, currentSong, playing, currentTime, setPlayingState, setCurrentTime]
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(usePlayer))
