import React from 'react'

class Weather extends React.Component {
    constructor(props) {
        super()
        this.state = {
            loading: true
        }

        // Default lat and long
        this.lat = 36.078193399999996;
        this.lon = -94.1901826;
        this.apikey='2a8bf8ec10b65fdc9695467f42bef9b2'
        this.units='imperial'

        console.log(props)
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
        // this string should work but its not for some reason
        //'http://api.openweathermap.org/data/2.5/weather?lat=' + {lat} + '&lon=' + {lon} + '&APPID=' + {apikey}

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
        if (this.props.props.time.getHours() > 12) {
            return ('day')
        } else {
            return ('night')
        }
    }

    render() {
        return(
            <div className="forecast">
                {this.state.loading ? <p>Loading...</p> : 
                    <div>
                        <i className={`wi wi-owm-${ this.dayOrNight() }-${ this.state.data.weather["0"].id }`}></i>
                        <h3>
                            It's currently {Math.trunc(this.state.data.main.temp)} degrees in {this.state.data.name}
                        </h3>
                        <h5>
                            High of {Math.trunc(this.state.data.main.temp_max)} degrees
                        </h5>
                        <h5>
                            Low of {Math.trunc(this.state.data.main.temp_min)} degrees
                        </h5>
                    </div>
                }                
            </div>

        )
    }
}

export default Weather