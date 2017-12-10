import React, {Component} from 'react'
import {DropDown} from './dropdown'
const MonthValues = require('../data/months');
const DayValues = require('../data/days');
const YearValues = require('../data/years');
const TransactionTypes = require('../data/transaction-types');
const AccountTypes = require('../data/account-types');
const base = 'transaction'

export class Transaction extends Component {
	render () {
		const months = MonthValues['data'];
		const days = DayValues['data'];
		const years = YearValues['data'];
		const transactions = TransactionTypes['data'];
		const accounts = AccountTypes['data'];
		return (
			<div className={`${base}`}>
			  <div className={`${base}_title`}>Add Transaction</div>
			  <div className={`${base}_row`}>
			    <span className={`${base}_label ${base}_label-date`}>Date:</span>
			    <DropDown options={months} className={`${base}_month`} onChange={e => console.log('Month=' + e.target.value)}/>
			    <DropDown options={days} className={`${base}_day`} onChange={e => console.log('Day=' + e.target.value)}/>
			    <DropDown options={years} onChange={e => console.log('Year=' + e.target.value)}/>
			  </div>
			  <div className={`${base}_row`}>
			    <span className={`${base}_label ${base}_label-amount`}>Amount:</span>
			    <input type="text" name="amount"/>
			  </div>
			  <div className={`${base}_row`}>
          <span className={`${base}_label ${base}_label-description`}>Description:</span>
          <input type="text" name="description"/>
        </div>
        <div className={`${base}_row`}>
          <span className={`${base}_label ${base}_label-transaction`}>Transaction:</span>
          <DropDown options={transactions} onChange={e => console.log('Transaction=' + e.target.value)}/>
        </div>
        <div className={`${base}_row`}>
           <span className={`${base}_label ${base}_label-account`}>Account:</span>
           <DropDown options={accounts} onChange={e => console.log('Account=' + e.target.value)}/>
         </div>
			</div>
		);
	}
}