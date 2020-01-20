import React, { Component } from 'react';

import './styles.scss';

export default class Header extends Component {
  render (){
    return(
      <header className="header">
        <h1>
          Spotify da depressão
        </h1>
        <i className="fa fa-spotify"></i>
      </header>
    )
  }
};