import React, { Component } from 'react'
import {Months} from '../components/months';

const base = 'home-page'

export class HomePage extends Component {

  render () {
    return (
      <div className={`${base}`}>
        <Months />
      </div>
    )
  }
}
