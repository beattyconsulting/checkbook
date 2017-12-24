import React, {Component} from 'react'
import PropTypes from 'prop-types'
const base = 'dropdown'

export class DropDown extends Component {

    render() {
        const {options = [], className = '', onChange, selectedValue} = this.props

        let optionList = options.map(opt => {
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

        return <span className={`${base}`}>
            <select className={`${className}`} value={selectedValue} onChange={onChange}>
                {optionList.map(option => option)}
            </select>
        </span>
    }
}

DropDown.propTypes = {
    options: PropTypes.array,
    className: PropTypes.string,
    selectedValue: PropTypes.number,
    onChange: PropTypes.func,
    attributes: PropTypes.array
}