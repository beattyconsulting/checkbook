import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as types from './action-types'
import {setAccount, setAmount, setDay, setDescription, setMonth, setYear} from "./transaction"

const mockStore = configureStore([thunk])

describe('setters', function () {
    it('fires setAccount', function () {
        const store = mockStore({})
        store.dispatch(setAccount('Checking'))
        expect(store.getActions()[0]).toEqual({type: types.SET_ACCOUNT, account: 'Checking'})
    })
    it('fires setAmount', function () {
        const store = mockStore({})
        store.dispatch(setAmount(32.23))
        expect(store.getActions()[0]).toEqual({type: types.SET_AMOUNT, amount: 32.23})
    })
    it('fires setDescription', function () {
        const store = mockStore({})
        store.dispatch(setDescription("Groceries"))
        expect(store.getActions()[0]).toEqual({type: types.SET_DESCRIPTION, description: "Groceries"})
    })
    it('fires setDay', function () {
        const store = mockStore({})
        store.dispatch(setDay("07"))
        expect(store.getActions()[0]).toEqual({type: types.SET_DAY, day: 7})
    })
    it('fires setMonth', function () {
        const store = mockStore({})
        store.dispatch(setMonth("07"))
        expect(store.getActions()[0]).toEqual({type: types.SET_MONTH, month: 7})
    })
    it('fires setYear', function () {
        const store = mockStore({})
        store.dispatch(setYear("2017"))
        expect(store.getActions()[0]).toEqual({type: types.SET_YEAR, year: 2017})
    })
})