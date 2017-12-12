import React, { Component } from 'react'
import {Transaction} from '../components/transaction';
import Media from 'react-media'

const base = 'home-page'

export class HomePage extends Component {
  render() {
    return (
      <div>
        <Media query="(max-width: 599px)">
          {matches => matches ? (
            <div className='checkbook-small'>
                <div className={`${base}`}><Transaction /></div>
            </div>
          ) : (
            <div><div className={`${base}`}><Transaction /></div></div>
          )}
        </Media>
      </div>
    )
  }
}
