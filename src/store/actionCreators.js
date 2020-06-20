import * as constants from './constants'

// 设置当前音乐索引
export function setCurrentIndex(currentIndex) {
  return { type: constants.SET_CURRENTINDEX, currentIndex }
}

// 设置当前播放列表
export function setPlayList(playList) {
  console.log('setPlayList')
  return { type: constants.SET_PLAYLIST, playList }
}
