import React, { Component } from 'react';
import base from './services/base'

import Header from './components/Header';
import Main from './pages/main';
import LoadingSpining from './components/LoadingSpining'

import './styles.scss'

class App extends Component {

  state = {
    control:{},
    loading: false
  }

  componentDidMount(){
    this.ref = base.syncState(`/`, {
      context: this,
      state: 'control',
      then(){
        this.setState({loading: true})
      }
    })
  }

  render(){
    const { loading } = this.state;
    return (
      <div className="App">
        <Header />
        {loading ? <Main control={this.state.control} /> : <LoadingSpining />}
      </div>
    )
  }
}

export default App;
