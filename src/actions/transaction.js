import * as Actions from '../actions/action-types';

export function setAccount(account) {
    return dispatch => dispatch({type: Actions.SET_ACCOUNT, account})
}
export function setAmount(amount) {
    return dispatch => dispatch({type: Actions.SET_AMOUNT, amount: parseFloat(amount)})
}
export function setTransaction(transaction) {
    return dispatch => dispatch({type: Actions.SET_TRANSACTION, transaction})
}
export function setDescription(description) {
    return dispatch => dispatch({type: Actions.SET_DESCRIPTION, description})
}
export function setYear(year) {
    return dispatch => dispatch({type: Actions.SET_YEAR, year: parseInt(year)})
}
export function setMonth(month) {
    return dispatch => dispatch({type: Actions.SET_MONTH, month: parseInt(month)})
}
export function setDay(day) {
    return dispatch => dispatch({type: Actions.SET_DAY, day: parseInt(day)})
}