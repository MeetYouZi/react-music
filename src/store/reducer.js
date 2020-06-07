import { combineReducers } from 'redux';
import * as constants from './constants'
import { reducer as homeReducer } from '@/pages/home/store'

// 初始数据
const defaultState = {
  playList: [],
  currentIndex: -1,
  currentSong: {}
}

// 设置当前播放列表
function playList(playList = defaultState.playList, action) {
  switch (action.type) {
    case constants.SET_PLAYLIST:
      return action.playList
    default:
      return playList
  }
}

// 设置当前播放列表
function currentSong(
  playList = defaultState.playList,
  currentIndex = defaultState.currentIndex) {
  return playList[currentIndex] || {}
}

// combineReducers 管理整个store数据，
const reducer = combineReducers({
  playList,
  currentSong,
  home: homeReducer
});

export default reducer;
