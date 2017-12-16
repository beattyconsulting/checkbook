import React, {Component} from 'react'
import {Transaction} from '../components/transaction';

const base = 'home-page'

export class HomePage extends Component {
    render() {
        return (
            <div className={`${base}`}><Transaction/></div>
        )
    }
}
