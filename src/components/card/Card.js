import React from 'react'
import './Card.css'

class Card extends React.Component {
  render() {
    return (
      <div className={`card ${this.props.info.color}`}>
        <div className='value'>{this.props.info.value}</div>
        <div className='suit'>{this.props.info.suit}</div>
        <div className='value2'>{this.props.info.value}</div>
      </div>
    )
  }
}

export default Card
