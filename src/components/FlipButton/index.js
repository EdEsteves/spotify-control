import React, { Component } from 'react'

import './styles.scss'

function flipCard(e){
  e.target.closest('.user__list-item').classList.toggle('js-active');
}

const FlipButton = ({text} = this.props) => (
  <button className='btn__flip' onClick={(e) => flipCard(e)}>{text}</button>
)

export default  FlipButton;