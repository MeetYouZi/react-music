import { combineReducers } from 'redux';
import * as constants from './constants'
import { reducer as homeReducer } from '@/pages/home/store'
import {default} from 'react-redux/lib/utils/Subscription'

// 初始数据
const defaultState = {
  playList: [],
  currentIndex: -1,
  currentSong: {
    album: '我们在夏枝繁茂时再见',
    duration: 218.979,
    id: 1371353582,
    image: 'https://p1.music.126.net/mXqmc1nD5mu2S4pEvBVHzw==/109951164141857357.jpg',
    name: '我们在夏枝繁茂时再见',
    Singer: '钱正昊',
    url: 'https://music.163.com/song/media/outer/url?id=1371353582.mp3'
  },
  playing: false,
  audioELE: null,
  currentTime: 0
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
const currentSong = (currentSong = defaultState.currentSong, action) => {
  switch (action.type) {
    case constants.SET_CURRENTSONG:
      return action.currentSong
    default:
      return currentSong
  }
}

// 设置当前播放歌曲
const playing = (playing = defaultState.playing, action) => {
  switch (action.type) {
    case constants.SET_PLAYINGSTATE:
      return action.playing
    default:
      return playing
  }
}

// 设置当前播放歌曲
const audioELE = (audioELE = defaultState.audioELE, action) => {
  switch (action.type) {
    case constants.SET_AUDIOELE:
      return action.audioELE
    default:
      return audioELE
  }
}

const currentTime = (currentTime = defaultState.currentTime, action) => {
  switch (action.type) {
    case constants.SET_CURRENTTIME:
      return action.currentTime
    default:
      return currentTime
  }
}

// combineReducers 管理整个store数据，
const reducer = combineReducers({
  playList,
  currentIndex,
  currentSong,
  playing,
  audioELE,
  currentTime,
  home: homeReducer
})

export default reducer
