import React from 'react'
import './Sidebar.css'

class Sidebar extends React.Component {
  render() {
    return (
      <div className="background">
        <div className="buttonZone">
          <button type="button" className="btn btn-primary button mr-1 ml-1">Bet $5</button>
          <button type="button" className="btn btn-primary button mr-1 ml-1">Deal</button>
          <button type="button" className="btn btn-primary button mr-1 ml-1">Hit</button>
          <button type="button" className="btn btn-primary button mr-1 ml-1">Stand</button>
          <button type="button" className="btn btn-primary button mr-1 ml-1">Split</button>
          <button type="button" className="btn btn-primary button mr-1 ml-1">Double</button>
        </div>
      </div>
    )
  }
}

export default Sidebar
