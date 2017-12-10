import React, {Component} from 'react'
import {DropDown} from './dropdown'
const MonthValues = require('../data/months');
const DayValues = require('../data/days');
const YearValues = require('../data/years');
const base = 'transaction'

export class Transaction extends Component {
	render () {
		const months = MonthValues['data'];
		const days = DayValues['data'];
		const years = YearValues['data'];
		return (
			<div className={`${base}`}>
			<span className={`${base}_label`}>Date:</span>
			  <span><DropDown options={months}/></span>
			  <span><DropDown options={days}/></span>
			  <span><DropDown options={years}/></span>
			</div>
		);
	}
}