import * as constants from './constants'

// 设置当前音乐索引
export function setCurrentIndex(currentIndex) {
  return { type: constants.SET_CURRENTINDEX, currentIndex }
}

// 设置当前播放列表
export function setPlayList(playList) {
  return { type: constants.SET_PLAYLIST, playList }
}

// 设置当前播放列表
export function setCurrentSong(currentSong) {
  return { type: constants.SET_CURRENTSONG, currentSong }
}

// 设置当前播放状态
export function setPlayingState(playing) {
  return { type: constants.SET_PLAYINGSTATE, playing }
}
// 设置当前播放状态
export function setAudioELE(audioELE) {
  return { type: constants.SET_AUDIOELE, audioELE }
}

// 设置当前播放状态
export function setCurrentTime(currentTime) {
  return { type: constants.SET_CURRENTTIME, currentTime }
}
