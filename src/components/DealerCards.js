import React from 'react'
import Card from './card/Card'

class DealerCards extends React.Component {
  render() {
    return (
      <div>
        {this.props.cards.map((card, i) => <Card key={i} info={card}/>)}
      </div>

    )
  }
}

export default DealerCards
