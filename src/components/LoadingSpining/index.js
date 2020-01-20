import React, { Component } from 'react';

import './styles.scss';

export default class LoadingSpining extends Component {
  render() {
    return(
      <div className="loading">
        <i className="fa fa-spinner fa-spin" />
      </div>
    )
  }
};