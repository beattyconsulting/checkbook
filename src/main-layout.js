import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {ConnectedHomePage} from './home/home-page'
import {ConnectedTransactionPage} from "./transaction/transaction-page"

export class MainLayout extends Component {

    render() {
        return (
            <Switch>
                <Route path="/transaction" component={ConnectedTransactionPage}/>
                <Route path="/*" component={ConnectedHomePage}/>
            </Switch>
        )
    }
}

MainLayout.propTypes = {}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => ({})

export const ConnectedMainLayout = connect(mapStateToProps, mapDispatchToProps)(MainLayout)
