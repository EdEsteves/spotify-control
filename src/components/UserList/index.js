import React, { Component } from 'react';

import User from '../../components/User'

import './styles.scss'

export default class UserList extends Component{
  render(){
    const { control } = this.props;
    if(!control[2020]){
      return null
    }
    return (
      <div className="user__list">
        {Object.keys(control[2020]).map(key => (
          <User key={key} index={key} control={control[2020][key]}/>
        ))}
      </div>
    )
  }
}