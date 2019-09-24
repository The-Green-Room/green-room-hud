import React from 'react'
import './App.css'
import Calendar from 'react_google_calendar'

const calendar_configuration = {
  api_key: 'AIzaSyDEoqeQyrQ2HZaA7FUzYWfJEu8fXU70PAs',
  calendars: [
      {
        name: 'Green House Calendar', // whatever you want to name it
        url: 'qmgl5raib3ehhmqbov7fu0k99g@group.calendar.google.com' // your calendar URL
      }
    ]
}

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
