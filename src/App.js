import React from 'react'
import './css/App.css'
import './css/Clock.css'
import Calendar from 'react_google_calendar'
import calendar_config from './utils/calendar_config'
import {
  Container,
  Row,
  Col
} from 'react-bootstrap'
import Clock from 'react-clock'
import Quote from './components/Quote'
import P5Wrapper from './components/P5Wrapper'
import Weather from './components/Weather'

const calendar_configuration = calendar_config

class App extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      events: [],
      time: new Date(),
      
    }
  }

  componentDidMount () {
    this.interalID = setInterval(() => { this.tick() } , 1000)
  }

  componentWillUnmount () {
    clearInterval(this.intervalID)
  }

  tick () {
    delete this.state.time
    this.setState((prevState) => {
      return { ...prevState, time: new Date() }
    })
  }

  render () {
    let h
    const currentTime = this.state.time
    const bigTimeString = `${(h = currentTime.getHours()) === 0 ? 12 : h < 12 ? h : h - 12}:${currentTime.getMinutes().toString().padStart(2, '0')} ${(h < 12 ? 'AM' : 'PM')}`

    return (
      <div>

        {/* switch to webgl  */}
        <P5Wrapper
          p5props={{}}
          // onSetAppState={this.onSetAppState}
        />

        <Container fluid={true} style={{ flexWrap: 'nowrap' }}>
          <Row style={{ height: 960 }}>
            <Col style={{ flexGrow: 1, alignSelf: 'center' }}>
              <Row>
                <Quote />
              </Row>
              <Row>
                <Col>
                  <Weather 
                    className='weather'
                    time={ this.state.time } 
                  />
                </Col> 
              </Row>
            </Col>
            <Col className='clock'>
              <Clock
                className='analog-clock'
                value={this.state.time}
                size={700}
                hourHandWidth={20}
                hourHandLength={40}
                hourHandOppositeLength={8}
                minuteHandWidth={8}
                minuteHandOppositeLength={12}
                secondHandWidth={2}
                secondHandLength={90}
                secondHandOppositeLength={18}
              />
              <p style={{ marginTop: 100, fontFamily: 'Orbitron', fontSize: 100, textAlign: "center" }}>
                {bigTimeString}
              </p>
            </Col>
            <Col style={{ flexGrow: 1 }}>
              <Calendar
                className="calendar"
                events={this.state.events}
                config={calendar_configuration}
              />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App
