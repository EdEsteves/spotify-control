import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './styles.scss'

function flipCard(e){
  e.target.closest('.user__list-item').classList.toggle('js-active');
}

export default class FlipButton extends Component{
  flipCard(event){
    event.currentTarget.closest('.user__list-item').classList.toggle('js-active');
  }

  render (){
    const { data } = this.props;
    return (
      <button className='btn__flip' onClick={flipCard}>{data.text}</button>
    )
  }
}

FlipButton.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })
};