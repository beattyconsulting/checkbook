import React, {Component} from 'react'
import Select from 'react-select';
const MonthValues = require('../data/months');
const base = 'months'

export class Months extends Component {
	render () {
		var options = MonthValues['data'];
		return (
			<div className={`${base}`}>
			<span className={`${base}_label`}>Date:</span>
			  <span><select className={`${base}_dropdown`}>
          {
           options.map(opt => {
             const {
               value,
               label
             } = opt

             return (
               <option key={value} value={value}>
                 {label}
               </option>
             )
           })
         }
        </select></span>
			</div>
		);
	}
}