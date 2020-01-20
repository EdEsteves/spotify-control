import React, { Component } from 'react'

import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Main from './pages/main'
import UserDetails from './pages/userDetails'

export default class  Routes extends Component {

  render (){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/user/:nome" component={UserDetails} />
        </Switch>
      </BrowserRouter>
    )
  }
}