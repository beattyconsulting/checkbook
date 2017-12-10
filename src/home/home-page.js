import React, { Component } from 'react'
import {Months} from '../components/months';

const base = 'home-page'

export class HomePage extends Component {

componentWillMount() {
  document.body.style.backgroundColor = '#f9feff'
}
  render () {
    return (
      <div className={`${base}`}>
        <Months />
      </div>
    )
  }
}
