import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Transaction} from '../components/transaction';

const base = 'home-page'

export class HomePage extends Component {
    render() {
        return (
            <div className={`${base}`}><Transaction transaction={this.props.transaction}/></div>
        )
    }
}

HomePage.propTypes = {
    transaction: PropTypes.object
}

const mapStateToProps = state => ({
    transaction : state.transaction
})

const mapDispatchToProps = (dispatch) => ({})

export const ConnectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage)
