import React from 'react'
import {
  Row,
  Col
} from 'react-bootstrap'
import '../css/Weather.css'

class Weather extends React.Component {
  constructor(props) {
    super()
    this.state = {
      loading: true
    }

    // Default lat and long
    this.lat = 36.078193399999996;
    this.lon = -94.1901826;
    this.apikey = '5e309b45fc1941bd17f5ec40b712220f'
    this.units = 'imperial'
  }
    
  // TODO: Ask for current location and call api based on that
  // refer to this maybe: https://stackoverflow.com/questions/13194623/get-location-when-pages-loads

  componentDidMount() {
    this.intervalID = setInterval(this.getWeather(this.lat, this.lon, this.apikey, this.units), 600000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  getWeather(lat, lon, apikey, units) {
    this.setState({ loading: true }, () => {
      fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&APPID=' + apikey + '&units=' + units)
      .then(response =>  response.json())
      .then(data => this.setState({ 
        loading: false,
        data: data
      }))
    })
  }

  dayOrNight() {
    var currentTimeUTC =  Date.UTC(this.props.props.time.getUTCFullYear(), this.props.props.time.getUTCMonth(), this.props.props.time.getUTCDate(),
    this.props.props.time.getUTCHours(), this.props.props.time.getUTCMinutes(), this.props.props.time.getUTCSeconds());

    if (currentTimeUTC > this.state.data.sys.sunrise &&
        currentTimeUTC < this.state.data.sys.sunset)  {
      // console.log("day")
      return ('day')
    } else {
      // console.log("night")
      return ('night')
      }
  }

  render() {
    return(
      <div className="weather" >
        {this.state.loading ? <p>Loading...</p> : 
          <div>
            <Row>
              <Col className="weather-icon">
                {/* TODO: call dayOrNight() only when getting weather */}
                <i className={ `wi wi-owm-${ this.dayOrNight() }-${ this.state.data.weather["0"].id }` } ></i>
              </Col>
              <Col className="current-temp">
                <p>{Math.trunc(this.state.data.main.temp)}°</p>
              </Col>
              <Col className='current-status'>
              <p>
                It's {Math.trunc(this.state.data.main.temp)}° and {this.state.data.weather["0"].description} in {this.state.data.name}
              </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <i className={ `direction-icon wi wi-wind towards-${ this.state.data.wind.deg }-deg` } ></i>
                <p className='direction-text'>{ this.state.data.wind.speed } mi/h</p>
              </Col>
              <Col className='high-and-low'>
                <Col>
                  <p>
                    High {Math.trunc(this.state.data.main.temp_max)}°
                  </p>
                </Col>
                <Col>
                  <p>
                    Low {Math.trunc(this.state.data.main.temp_min)}°
                  </p>
                </Col>
              </Col>
            </Row>
          </div>
        }         
      </div>
    )
  }
}

export default Weather