import React, {Component} from 'react'
import PropTypes from 'prop-types'

export class DropDown extends Component {

    render() {
        const {options = [], className = '', onChange} = this.props

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

        return <select className={`${className}`} value={defaultValue} onChange={e => onChange(e.target.value)}>
            {optionList.map(option => option)}
        </select>
    }
}

DropDown.propTypes = {
    options: PropTypes.array,
    className: PropTypes.string,
    onChange: PropTypes.func,
    attributes: PropTypes.array
}