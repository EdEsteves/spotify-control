import React, { Component } from 'react';
// import { Link } from 'react-router-dom'

import FlipButton from '../FlipButton'
import Month from '../Month'

import './styles.scss'

// export default class User extends Component {

//   render(){
//     const { usuario } = this.props
//     return (
      // <div className="user__list-item">
      //   <img alt={'avatar de '+usuario.nome} className="user__item-img" src={process.env.PUBLIC_URL + 'avatar-' + usuario.nome + '.jpg'}></img>
      //   <div className="user__item-infos">
      //     <h3 className="user__item-name">{usuario.nome}</h3>
      //     <p className={"user__item-status " + (usuario.status ? 'valid' : 'invalid')}>Status : <strong>{usuario.status ? 'Ok' : 'Pendente'}</strong> </p>
      //   </div>
      //   <Link className="user__item-action" to={{pathname: `/user/${usuario.nome}`, state: {meses : [usuario.meses]}}}>Ver controle</Link>
      // </div>
//     )
//   }
// }


const User = ({ usuario } = this.props) => (
  <div className="user__list-item">
    <div className="user__card user__item">
      <div className="user__card-front">
        <img alt={'avatar de '+usuario.nome} className="user__item-img" src={process.env.PUBLIC_URL + 'avatar-' + usuario.nome + '.jpg'}></img>
        <div className="user__item-infos">
          <h3 className="user__item-name">{usuario.nome}</h3>
          <p className={"user__item-status " + (usuario.status ? 'valid' : 'invalid')}>Status : <strong>{usuario.status ? 'Ok' : 'Pendente'}</strong> </p>
        </div>
        <FlipButton data={{id: 'details__' + usuario.nome, text: 'Ver detalhes'}} />
        {/* <Link className="user__item-action" to={{pathname: `/user/${usuario.nome}`, state: {meses : [usuario.meses]}}}>Ver controle</Link> */}
      </div>
      <div className="user__card-back">
        <h3>Meses</h3>
        <ul className="user__item-months">
          {usuario.meses.map(mes => (
            <Month key={Object.keys(mes)} mes={mes} />
          ))}
        </ul>
        <FlipButton data={{id: 'back', text: 'Voltar'}} />
      </div>
    </div>
  </div>
)


export default User