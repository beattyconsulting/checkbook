import React, {Component} from 'react'
import PropTypes from 'prop-types'
const base = 'dropdown'

export class DropDown extends Component {

  render() {
      return <select className={`${base}_select`}>
                {
                 this.props.options.map(opt => {
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
      </select>
      }
}

DropDown.propTypes = {
	options: PropTypes.array
}