import React from 'react'

class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }

        // Default lat and long
        this.lat = 36.078193399999996;
        this.lon = -94.1901826;
        this.apikey="2a8bf8ec10b65fdc9695467f42bef9b2"
    }
    
    // TODO: Ask for current location and call api based on that
    // refer to this maybe: https://stackoverflow.com/questions/13194623/get-location-when-pages-loads

    componentDidMount() {
        this.intervalID = setInterval(this.getWeather(this.lat, this.lon, this.apikey), 600000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalID)
    }

    getWeather(lat, lon, apikey) {
        // this string should work but its not for some reason
        //'http://api.openweathermap.org/data/2.5/weather?lat=' + {lat} + '&lon=' + {lon} + '&APPID=' + {apikey}

        this.setState({ loading: true }, () => {
            fetch('https://api.openweathermap.org/data/2.5/weather?lat=36.078193399999996&lon=-94.1901826&APPID=5e309b45fc1941bd17f5ec40b712220f&units=imperial')
            .then(response =>  response.json())
            .then(data => this.setState({ 
                loading: false,
                data: data
            }))
        })
    }

    render() {
        return(
            <div className="forecast">
                {this.state.loading ? <p>Loading...</p> : this.state.data.main.temp}
            </div>

        )
    }
}

export default Weather