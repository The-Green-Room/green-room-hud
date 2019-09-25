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

  componentDidMount () {
    this.interalID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount () {
    clearInterval(this.intervalID)
  }

  tick () {
    this.setState({ ...this.state, time: new Date() })
  }

  render () {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />

      <Container fluid={true} style={{
        flexWrap: 'nowrap'
        }}>
          <Row style={{ flexShrink: 1}}>
            <Col style={{
                flexGrow: 1
              }}>
              {'Test STuff Test STuff Test STuff Test STuff Test STuff Test STuff Test STuff Test STuff Test STuff Test STuff'}
            </Col>
            <Col style={{
                flexShrink: 2,
                alignSelf: 'center'
              }}>
              <Clock
                className='analog-clock'
                value={this.state.time}
                size={800}
              />
            </Col>
            <Col style={{
                flexGrow: 1
              }}>
                <Calendar
                  events={this.state.events}
                  config={calendar_configuration}
                />
            </Col>
          </Row>
          <Row style={{ justifyContent: 'center', flexShrink: 1}}>
            <Col>
              {this.state.time.toTimeString()}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App
