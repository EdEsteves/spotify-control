import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './styles.scss'

export default class User extends Component {

  render(){
    const { usuario } = this.props
    console.log('usuario >>>', usuario)
    return (
      <div className="user__list-item">
        <img className="user__item-img" src={process.env.PUBLIC_URL + usuario.avatar}></img>
        <div className="user__item-infos">
          <h3 className="user__item-name">{usuario.nome}</h3>
          <p className={"user__item-status " + (usuario.status ? 'valid' : 'invalid')}>Status : <strong>{usuario.status ? 'Ok' : 'Pendente'}</strong> </p>
        </div>
        <Link className="user__item-action" to={`/user/${usuario.nome}`}>Ver controle</Link>
      </div>
    )
  }
}