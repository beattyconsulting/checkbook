import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Transaction} from '../components/transaction';
import {setAccount, setAmount, setDay, setDescription, setMonth, setTransaction, setYear} from "../actions/transaction"
import * as PropTypes from "less"

const base = 'home-page'

export class HomePage extends Component {
    render() {
        return (
            <div className={`${base}`}>
                <Transaction
                    transaction={this.props.transaction}
                    setAccount={this.props.setAccount}
                    setAmount={this.props.setAmount}
                    setDescription={this.props.setDescription}
                    setDay={this.props.setDay}
                    setMonth={this.props.setMonth}
                    setYear={this.props.setYear}
                    setTransaction={this.props.setTransaction}
                />
            </div>
        )
    }
}

HomePage.propTypes = {}


const mapStateToProps = state => ({
    transaction: state.transaction
})

const mapDispatchToProps = (dispatch) => ({
    setAccount: account => dispatch(setAccount(account)),
    setAmount: amount => dispatch(setAmount(amount)),
    setDescription: description => dispatch(setDescription(description)),
    setDay: day => dispatch(setDay(day)),
    setMonth: month => dispatch(setMonth(month)),
    setYear: year => dispatch(setYear(year)),
    setTransaction: transaction => dispatch(setTransaction(transaction))
})

export const ConnectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage)
