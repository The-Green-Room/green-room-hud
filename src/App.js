import React from 'react'
import './App.css'
import Calendar from 'react_google_calendar'
import calendar_config from './calendar_config'
import Clock from 'react-clock'
import DigitalClock from 'react-digital-clock'
import {
  Container,
  Row,
  Col
} from 'react-bootstrap'

const calendar_configuration = calendar_config

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      events: [],
      time: new Date()
    }
  }

  tick () {
    this.setState({ ...this.state, time: new Date() })
  }

  render () {
    return (
      <div className='App'>
        <Container>
          <Row>
            <Col sm={4}>
              <Clock
                className='analog-clock'
                value={this.state.time}
              />
            </Col>
            <Col sm={2}>
              <div className='GreenRoomCalendar'>
                <Calendar
                  events={this.state.events}
                  config={calendar_configuration}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App
