import * as constants from './constants'

// 设置当前音乐索引
export function setCurrentIndex(currentIndex) {
  return { type: constants.SET_CURRENTINDEX, currentIndex }
}
