import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './styles.scss'

function flipCard(e){
  e.target.closest('.user__list-item').classList.toggle('js-active');
}

// const FlipButton = ({text} = this.props) => (
//   <button className='btn__flip' onClick={(e) => flipCard(e)}>{text}</button>
// )

// export default  FlipButton;

export default function FlipButton ({ data } = this.props){
  return (
    <button className='btn__flip' onClick={(e) => flipCard(e)}>{data.text}</button>
  )
}

FlipButton.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })
};