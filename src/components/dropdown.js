import React, {Component} from 'react'
import PropTypes from 'prop-types'

export class DropDown extends Component {

    render() {
        const {options = [], className = '', onChange, selectedValue} = this.props

        let defaultValue
        let optionList = options.map(opt => {
            const {
                value,
                label,
                selected
            } = opt
            if (selected) {
                defaultValue = value
            }
            return (
                <option key={value} value={value}>
                    {label}
                </option>
            )
        })

        return <select className={`${className}`} value={selectedValue} onChange={onChange}>
            {optionList.map(option => option)}
        </select>
    }
}

DropDown.propTypes = {
    options: PropTypes.array,
    className: PropTypes.string,
    selectedValue: PropTypes.number,
    onChange: PropTypes.func,
    attributes: PropTypes.array
}