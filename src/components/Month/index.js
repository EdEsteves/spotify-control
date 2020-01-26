import React, { Component } from 'react'
import './styles.scss';

export default class Month extends Component {
	render () {
    const { mes } = this.props
		return (
      <li className="month">
        <h3>{Object.keys(mes)}:</h3>
        <span>{(mes[Object.keys(mes)] === '' ? '-' : Object.values(mes))}</span>
      </li>
			// <li className={"month " + (mes[Object.keys(mes)] === 'pago' ? 'paid' : mes[Object.keys(mes)] === 'pendente' ? 'owe' : mes[Object.keys(mes)] === '' ? 'wait' : '')}>
			// 	<span className="month__item">{Object.keys(mes)}</span>
			// </li>
		)
	}
}