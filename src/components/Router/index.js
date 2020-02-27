import React, { Component } from 'react'

import { BrowserRouter, Switch, Route} from 'react-router-dom'

import App from '../../App'
// import UserDetails from './pages/userDetails'

export default class Router extends Component {

  render (){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          {/* <Route path="/user/:nome" component={UserDetails} /> */}
        </Switch>
      </BrowserRouter>
    )
  }
}