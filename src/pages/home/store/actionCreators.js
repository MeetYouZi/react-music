import * as constants from './constants'

export const searchFocus = () => ({
	type: constants.SEARCH_FOCUS,
	value: true
})

export const searchBlur = () => ({
	type: constants.SEARCH_BLUR,
	value: false
})
