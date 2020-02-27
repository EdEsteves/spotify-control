import React, { Component } from 'react';
// import { Link } from 'react-router-dom'

import FlipButton from '../FlipButton'
import Month from '../Month'

import './styles.scss'

export default class User extends Component {
  render() {
    const { control, index } = this.props;
    return(
    <div className="user__list-item">
      <div className="user__card user__item">
        <div className="user__card-front">
          <img alt={'avatar de '+index} className="user__item-img" src={process.env.PUBLIC_URL + 'avatar-' + index.toLowerCase() + '.jpg'}></img>
          <div className="user__item-infos">
            <h3 className="user__item-name">{index}</h3>
            <p className={"user__item-status " + (control.status ? 'valid' : 'invalid')}>Status : <strong>{control.status ? 'Ok' : 'Pendente'}</strong> </p>
          </div>
          <FlipButton data={{id: 'details__' + index, text: 'Ver detalhes'}} />
        </div>
        <div className="user__card-back">
          <h3>Meses</h3>
          <ul className="user__item-months">
            {Object.keys(control.meses).map(mes => (
              <Month key={mes} index={mes} mes={control.meses[mes]} />
            ))}
          </ul>
          <FlipButton data={{id: 'back', text: 'Voltar'}} />
        </div>
      </div>
    </div>
    )
  }
}