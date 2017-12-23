import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {DropDown} from './dropdown'
import {setDescription} from "../actions/transaction"

const MonthValues = require('../data/months');
const DayValues = require('../data/days');
const YearValues = require('../data/years');
const TransactionTypes = require('../data/transaction-types');
const AccountTypes = require('../data/account-types');
const base = 'transaction'

export class Transaction extends Component {
    render() {
        const {setAmount, setAccount, setDescription, setDay, setMonth, setYear, setTransaction} = this.props
        const {month, day, year} = this.props.transaction
        const months = getMonths(month)
        const days = getDays(day)
        const years = getYears(year)

        const transactions = TransactionTypes['data'];
        const accounts = AccountTypes['data'];
        return (
            <div className={`${base}`}>
                <div className={`${base}_title`}>Add Transaction</div>
                <div className={`${base}_row`}>
                    <span className={`${base}_label ${base}_label-date`}>Date:</span>
                    <DropDown options={months} className={`${base}_select`}
                              onChange={e => setMonth(e.target.value)}/>
                    <DropDown options={days} className={`${base}_select ${base}_select_day`}
                              onChange={e => setDay(e.target.value)}/>
                    <DropDown options={years} className={`${base}_select ${base}_select_year`}
                              onChange={e => setYear(e.target.value)}/>
                </div>
                <div className={`${base}_row`}>
                    <span className={`${base}_label ${base}_label-amount`}>Amount:</span>
                    <input onChange={e => setAmount(e.target.value)} className={`${base}_input`} type="text" name="amount"/>
                </div>
                <div className={`${base}_row`}>
                    <span className={`${base}_label ${base}_label-description`}>Description:</span>
                    <input onChange={e => setDescription(e.target.value)}className={`${base}_input`} type="text" name="description"/>
                </div>
                <div className={`${base}_row`}>
                    <span className={`${base}_label`}>Transaction:</span>
                    <DropDown className={`${base}_select ${base}_select_wide`} options={transactions}
                              onChange={e => setTransaction(e.target.value)}/>
                </div>
                <div className={`${base}_row`}>
                    <span className={`${base}_label`}>Account:</span>
                    <DropDown className={`${base}_select ${base}_select_wide`} options={accounts}
                              onChange={e => setAccount(e.target.value)}/>
                </div>
                <button className={`${base}_button`} onClick={e => console.log('Add Transaction')}>Add Transaction
                </button>
            </div>
        );
    }
}

export const getDays = (currentDay) => {
    const days = DayValues['data']
    removeSelected(days)
    days[currentDay-1].selected = true
    return days
}

export const getMonths = (currentMonth) => {
    const months =  MonthValues['data']
    removeSelected(months)
    months[currentMonth-1].selected = true
    return months
}

export const getYears = (currentYear) => {
    const years = YearValues['data'];
    removeSelected(years)
    const yearIndex = years.findIndex(
        function (entry) {
            return entry.value === currentYear
        }
    )
    years[yearIndex].selected = true
    return years
}
const removeSelected = (array) => {
    array.forEach(function (value) {
        value.selected = false
    });
}

Transaction.propTypes = {
    transaction: PropTypes.object,
    setAccount: PropTypes.func,
    setAmount: PropTypes.func,
    setDescription: PropTypes.func,
    setDay: PropTypes.func,
    setMonth: PropTypes.func,
    setYear: PropTypes.func,
    setTransaction: PropTypes.func
}