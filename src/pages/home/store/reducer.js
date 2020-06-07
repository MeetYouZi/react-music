import * as constants from './constants';

//immutable库会生成一个immutable对象。
const defaultState = {
	focused: false
}

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.SEARCH_FOCUS:
			const newState = JSON.parse(JSON.stringify(defaultState))
			newState.focused = action.value
			return newState
		default:
			return state;
	}
}
