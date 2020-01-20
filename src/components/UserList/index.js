import React, { Component } from 'react';
import api from '../../services/api';

import User from '../../components/User'

import './styles.scss'

export default class UserList extends Component {

  state={
    usuarios: []
  }

  componentDidMount = () =>{
    this.loadUsers();
  }

  loadUsers = async () =>{
    const response = await api.get(`/5e25dee3b236b871b36559e0`)

    const _usuarios = response.data;

    this.setState({usuarios: _usuarios})
  }

  render(){
    const { usuarios } = this.state;

    return (
      <div className="user__list">
        {usuarios.map(usuario => (
          <User usuario={usuario}/>
        ))}
      </div>
    )
  }
}