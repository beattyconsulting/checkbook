import {
	GET_REGISTER_SUCCESS,
	GET_REGISTER_FAILURE
} from '../actions';

const defaultState = {
	available: false
};

export function registerReducer (state = defaultState, action) {
	switch (action.type) {
		case GET_REGISTER_SUCCESS:
			return {...state};
		case GET_REGISTER_FAILURE:
			return {...state};
		default:
			return state;
	}
}