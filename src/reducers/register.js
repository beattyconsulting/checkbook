import * as Actions from '../actions/action-types';

const defaultState = {
    available: false
};

export function registerReducer(state = defaultState, action) {
    switch (action.type) {
        case Actions.GET_REGISTER_SUCCESS:
            return {...state};
        case Actions.GET_REGISTER_FAILURE:
            return {...state};
        default:
            return state;
    }
}