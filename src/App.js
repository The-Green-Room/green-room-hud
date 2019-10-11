import React from 'react'
import './App.css'
import Calendar from 'react_google_calendar'
import calendar_config from './calendar_config'
import {
  Container,
  Row,
  Col
} from 'react-bootstrap'
import Clock from 'react-clock'
import quoteStrings from './quotes'
import P5Wrapper from './P5Wrapper'

const calendar_configuration = calendar_config

class App extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      events: [],
      time: new Date(),
      quote: '',
      author: ''
    }
  }

  componentDidMount () {
    this.getNewQuote()
    this.interalID = setInterval(() => {
      this.tick()
      if ((this.state.time.getMinutes() % 15 === 0) && (this.state.time.getSeconds() % 60 === 0)) {
        this.getNewQuote()
      }
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.intervalID)
  }

  tick () {
    this.setState({ ...this.state, time: new Date() })
  }

  getNewQuote () {
    const fullQuoteText = quoteStrings[Math.floor(Math.random() * 100)]
    const authorSlice = fullQuoteText.slice(fullQuoteText.search(/ -\w[A-Za-z .\-!?]*/))
    const quoteSlice = fullQuoteText.slice(0, fullQuoteText.search(/ -\w[A-Za-z .\-!?]*/))
    this.setState({ ...this.state, quote: quoteSlice, author: authorSlice})
  }

  render () {
    let h
    const currentTime = this.state.time
    const bigTimeString = `${(h = currentTime.getHours()) === 0 ? 12 : h < 12 ? h : h - 12}:${currentTime.getMinutes().toString().padStart(2, '0')} ${(h < 12 ? 'AM' : 'PM')}`

    return (
      <div>
        <P5Wrapper
          p5props={{}}
          // onSetAppState={this.onSetAppState}
        />

        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
          integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Orbitron&text=0123456789:AMP'
          rel='stylesheet'
          type='text/css'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Lobster&display=swap'
          rel='stylesheet'
          type='text/css'
        />

        <Container fluid={true} style={{ flexWrap: 'nowrap' }}>
          <Row style={{ height: 960 }}>
            <Col style={{ flexGrow: 1, alignSelf: 'center', fontFamily: 'Lobster' }}>
              <p style={{ fontSize: 40 }}>{this.state.quote}</p>
              <p className='text-right' style={{ fontSize: 24 }}>{this.state.author}</p>
            </Col>
            <Col style={{
              alignSelf: 'center',
              fontSize: 24,
              fontWeight: 'bold',
              textAlign: 'center'
            }}>
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
              <p style={{ marginTop: 100, fontFamily: 'Orbitron', fontSize: 100 }}>
                {bigTimeString}
              </p>
            </Col>
            <Col style={{ flexGrow: 1 }}>
              <Calendar
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
