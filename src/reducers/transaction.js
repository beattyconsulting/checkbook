import * as Actions from '../common/actions';
import * as Constants from '../common/constants'

import moment from "moment"

const now = moment()
const defaultState = {
    month: now.month() + 1,
    day: now.date(),
    year: now.year(),
    transaction: Constants.WITHDRAWAL,
    account: Constants.CHECKING
};

export function transactionReducer(state = defaultState, action) {
    switch (action.type) {
        case Actions.SET_MONTH:
            return {...state, month: action.month};

        case Actions.SET_DAY:
            return {...state, day: action.day};

        case Actions.SET_YEAR:
            return {...state, year: action.year};

        case Actions.SET_AMOUNT:
            return {...state, amount: action.amount};

        case Actions.SET_DESCRIPTION:
            return {...state, description: action.description};

        case Actions.SET_TRANSACTION:
            return {...state, transaction: action.transaction};

        case Actions.SET_ACCOUNT:
            return {...state, account: action.account};

        default:
            return state;
    }
}