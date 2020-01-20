import React, { Component } from 'react';

import UserList from '../../components/UserList'

import './styles.scss'

export default class Main extends Component {

  render(){
    return (
      <div className="user__container">
        <UserList />
      </div>
    )
  }
}