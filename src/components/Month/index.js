import React from 'react'
import './styles.scss';

const Month = ({ mes, index } = this.props) => {
	const months = { 1: 'Jan', 2: 'Fev', 3: 'Mar', 4: 'Abr', 5: 'Mai', 6: 'Jun', 7: 'Jul', 8: 'Ago', 9: 'Set', 10: 'Out', 11: 'Nov',12: 'Dez'}
	return (
		<li className="month">
			<h3>{months[index]}:</h3>
			<span>{(mes === '' ? '-' : mes)}</span>
		</li>
	)
}

export default Month