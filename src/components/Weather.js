import React from 'react'
import '../css/Weather.css'

class Weather extends React.Component {
  constructor(props) {
    super()

    // Default lat and long
    this.lat = 36.078193399999996;
    this.lon = -94.1901826;
    this.apikey = '5e309b45fc1941bd17f5ec40b712220f'
    this.units = 'imperial'

    this.state = {
      loading: true,
      partOfDay: 'day',
      data: {}
    }
  }
    
  // TODO: Ask for current location and call api based on that
  // refer to this maybe: https://stackoverflow.com/questions/13194623/get-location-when-pages-loads

  componentDidMount() {
    this.getWeather(this.lat, this.lon, this.apikey, this.units)
    this.intervalID = setInterval(() => {
      this.getWeather(this.lat, this.lon, this.apikey, this.units)
    }, 600000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  getWeather(lat, lon, apikey, units) {
    this.setState((prevState) => {
      return {
        ...prevState,
        loading: true
      }
    }, () => {
      fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&APPID=' + apikey + '&units=' + units)
      .then(response =>  response.json())
      .then(data => {
        this.setState((prevState) =>{
          return {
            ...prevState,
            data: data
          }
        })
        this.setState((prevState) => {
          return {
            ...prevState,
            partOfDay: this.dayOrNight(),
            loading: false
          }
        })
      })
    })
  }

  dayOrNight() {
    var currentTimeUTC =  Date.UTC(this.props.time.getUTCFullYear(), this.props.time.getUTCMonth(), this.props.time.getUTCDate(),
    this.props.time.getUTCHours(), this.props.time.getUTCMinutes(), this.props.time.getUTCSeconds())

    currentTimeUTC = Math.floor(currentTimeUTC / 1000)

    // console.log("Current time utc: " + currentTimeUTC)
    // console.log("sunrise: " + this.state.data.sys.sunrise)
    // console.log("sunset: " + this.state.data.sys.sunset)

    if (currentTimeUTC > this.state.data.sys.sunrise &&
        currentTimeUTC < this.state.data.sys.sunset)  {
      return ['day', this.state.data.sys.sunset - currentTimeUTC]
    } else {
      return ['night', this.state.data.sys.sunrise - currentTimeUTC]
    }
  }

  render() {
    //console.log(this.state)

    return(
      <div className="weather" >
        {this.state.loading ? <p>Loading...</p> : 
          <div> 
            <div className='row'>
              <div className='column'>
                <i className={ `weather-icon wi wi-owm-${ this.state.partOfDay[0]  }-${ this.state.data.weather["0"].id }` } ></i>
                <p className='weather-icon-text'>{this.state.data.weather["0"].description}</p>
              </div>
              <div className='column current-temp'>
                <p>{Math.trunc(this.state.data.main.temp)}°</p>
              </div>
              <div className='column current-status'>
                <p>
                  {/* TODO: how many hours to sunrise or sunset */}
                  { this.state.partOfDay[0] }
                </p>
              </div>
            </div>
            <div className='row'>
              <div className='column'>
                <i className={ `direction-icon wi wi-wind towards-${ this.state.data.wind.deg }-deg` } ></i>
                <p className='direction-text'>{ this.state.data.wind.speed } mi/h</p>
              </div>
              <div className='column high-and-low'>
                <p>
                  High {Math.trunc(this.state.data.main.temp_max)}°
                  Low {Math.trunc(this.state.data.main.temp_min)}°
                </p>
              </div>
            </div>
          </div>
        }         
      </div>
    )
  }
}

export default Weather