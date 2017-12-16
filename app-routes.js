import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {ConnectedMainLayout} from "./src/main-layout"

export class AppRoutes extends Component {

    render() {
        return (
            <Switch>
                <Route path="*" component={ConnectedMainLayout}/>
            </Switch>
        )
    }
}