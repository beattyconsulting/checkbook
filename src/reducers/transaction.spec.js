import {transactionReducer} from './transaction'
import * as Actions from '../actions/action-types'
import moment from "moment/moment"

describe('transactionReducer', function () {

    const currentState = {a: true}
    it('default state', function () {
        const now = moment()
        const newState = transactionReducer(undefined, {type: 'UNKNOWN'})
        expect(newState).toEqual({account: "checking", day: now.date(), month: now.month() + 1, transaction: "withdrawal", year: now.year()})
    });

    it('reduces month into state', function () {
        const newState = transactionReducer(currentState, {type: Actions.SET_MONTH, month: 2})
        expect(newState).toEqual({...currentState, month: 2})
    })
    it('reduces day into state', function () {
        const newState = transactionReducer(currentState, {type: Actions.SET_DAY, day: 4})
        expect(newState).toEqual({...currentState, day: 4})
    })
    it('reduces year into state', function () {
        const newState = transactionReducer(currentState, {type: Actions.SET_YEAR, year: 2018})
        expect(newState).toEqual({...currentState, year: 2018})
    })
    it('reduces amount into state', function () {
        const newState = transactionReducer(currentState, {type: Actions.SET_AMOUNT, amount: 23.32})
        expect(newState).toEqual({...currentState, amount: 23.32})
    })
    it('reduces description into state', function () {
        const newState = transactionReducer(currentState, {type: Actions.SET_DESCRIPTION, description: 'Some Store'})
        expect(newState).toEqual({...currentState, description: 'Some Store'})
    })
    it('reduces transaction into state', function () {
        const newState = transactionReducer(currentState, {type: Actions.SET_TRANSACTION, transaction: 'Withdrawal'})
        expect(newState).toEqual({...currentState, transaction: 'Withdrawal'})
    })
    it('reduces account into state', function () {
        const newState = transactionReducer(currentState, {type: Actions.SET_ACCOUNT, account: 'Checking'})
        expect(newState).toEqual({...currentState, account: 'Checking'})
    })

    it('unknown type', function () {
        const newState = transactionReducer(currentState, {type: 'UNKNOWN', stuff: 'value'})
        expect(newState).toEqual(currentState)
    })
})