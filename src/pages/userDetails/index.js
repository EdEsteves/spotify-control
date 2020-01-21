import React, { Component } from 'react'
import Month from '../../components/Month'

import './styles.scss';

export default class UserDetails extends Component {
  render(){
    const { meses } = this.props.location.state
    const { nome } = this.props.match.params
    console.log(meses[0])
    return(
      <div className="months__container">
        <div className="months__user-info"></div>
        <div className="months__container">
          <h3>2020</h3>
          <ul className="months__list">
            {meses[0].map(mes => (
              <Month key={mes} mes={mes} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}