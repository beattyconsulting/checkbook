import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Transaction} from '../components/transaction';
import {setAccount, setAmount, setDay, setDescription, setMonth, setTransaction, setYear} from "../actions/transaction"
import {MainMenu} from "../components/main-menu"

const base = 'transaction-page'

export class TransactionPage extends Component {
    render() {
        return (
            <div className={`${base}`}>
                <MainMenu/>
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

TransactionPage.propTypes = {}


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

export const ConnectedTransactionPage = connect(mapStateToProps, mapDispatchToProps)(TransactionPage)