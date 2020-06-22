import { combineReducers } from 'redux';
import * as constants from './constants'
import { reducer as homeReducer } from '@/pages/home/store'

// 初始数据
const defaultState = {
  playList: [],
  currentIndex: -1,
  currentSong: {},
  playing: false,
  audioELE: null
}

// 设置当前播放列表
const playList = (playList = defaultState.playList, action) => {
  switch (action.type) {
    case constants.SET_PLAYLIST:
      return action.playList
    default:
      return playList
  }
}
// 设置当前播放索引
const currentIndex = (currentIndex = defaultState.currentIndex, action) => {
  switch (action.type) {
    case constants.SET_CURRENTINDEX:
      return action.currentIndex
    default:
      return currentIndex
  }
}

// 设置当前播放歌曲
const currentSong =(currentSong = defaultState.currentSong, action) => {
  switch (action.type) {
    case constants.SET_CURRENTSONG:
      return action.currentSong
    default:
      return currentSong
  }
}

// 设置当前播放歌曲
const playing =(playing = defaultState.playing, action) => {
  switch (action.type) {
    case constants.SET_PLAYINGSTATE:
      return action.playing
    default:
      return playing
  }
}

// 设置当前播放歌曲
const audioELE =(audioELE = defaultState.audioELE, action) => {
  switch (action.type) {
    case constants.SET_AUDIOELE:
      return action.audioELE
    default:
      return audioELE
  }
}

// combineReducers 管理整个store数据，
const reducer = combineReducers({
  playList,
  currentIndex,
  currentSong,
  playing,
  audioELE,
  home: homeReducer
})

export default reducer
