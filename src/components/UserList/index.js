import React, { Component } from 'react';
import api from '../../services/api';

import User from '../../components/User'
import LoadingSpining from '../../components/LoadingSpining'

import './styles.scss'

export default class UserList extends Component {

  state={
    usuarios: [],
    loading: false
  }

  componentDidMount = () =>{
    this.loadUsers();
  }

  loadUsers = async () =>{
    const response = await api.get(`/5e25dee3b236b871b36559e0/1`)

    const _usuarios = response.data;

    this.setState({usuarios: _usuarios, loading: true})
  }

  render(){
    const { usuarios, loading } = this.state;

    return (
      <div className="user__list">
        {loading ? usuarios.map(usuario => (
          <User key={usuario.nome}  usuario={usuario}/>
        )) : <LoadingSpining /> }
      </div>
    )
  }
}