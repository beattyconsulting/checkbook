import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {ConnectedHomePage} from './home/home-page'

export class MainLayout extends Component {

    render() {
        return (
            <Switch>
                <Route path="/checkbook" component={ConnectedHomePage}/>
                <Route path="*" component={ConnectedHomePage}/>
            </Switch>
        )
    }
}

MainLayout.propTypes = {}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => ({})

export const ConnectedMainLayout = connect(mapStateToProps, mapDispatchToProps)(MainLayout)
