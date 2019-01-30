import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import DealerCards from './components/DealerCards'
import Sidebar from './components/sidebar/Sidebar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      deck: [],
      dealerCards: [
        {value: 9, suit: '♥', color:'red'},
        {value: 'K', suit: '♥', color:'black'}
      ],
      playerCards: []
    }
  }
  render() {
    return (
      <div className="all">
        <Header />
        <div className="row">
          <div className="col-xs-12 col-md-9">
            <DealerCards cards={this.state.dealerCards}/>
          </div>
          <div className="col-xs-12 col-md-3">
            <Sidebar />
          </div>
        </div>

      </div>
    )
  }
}

export default App;
