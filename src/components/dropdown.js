import React, {Component} from 'react'
import PropTypes from 'prop-types'

export class DropDown extends Component {

    render() {
        const {options = [], className = '', onChange} = this.props
        return <select className={`${className}`} onChange={e => onChange(e.target.value)}>
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
        </select>
    }
}

DropDown.propTypes = {
    options: PropTypes.array,
    className: PropTypes.string,
    onChange: PropTypes.func
}