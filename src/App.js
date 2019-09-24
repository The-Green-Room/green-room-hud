import React from 'react'
import './App.css'
import Calendar from 'react_google_calendar'
import calendar_config from './calendar_config'

const calendar_configuration = calendar_config

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      events: []
    }
  }
  render () {
    return (
      <div className="App">
        <Calendar
          events={this.state.events}
          config={calendar_configuration}
        />
      </div>
    )
  }
}

export default App
