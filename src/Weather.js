import React from 'react'
import Axios from 'axios'

class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }

        // Default lat and long
        this.lat = 36.078193399999996;
        this.lon = -94.1901826;
        this.apikey="2a8bf8ec10b65fdc9695467f42bef9b2"
    }
    
    // TODO: Ask for current location and call api based on that
    // refer to this maybe: https://stackoverflow.com/questions/13194623/get-location-when-pages-loads

    componentDidMount() {
        // var startPos;
        
        // var geoSuccess = function(position) {
        //   // Do magic with location
        //   startPos = position;
        //   document.getElementById('startLat').innerHTML = startPos.coords.latitude;
        //   document.getElementById('startLon').innerHTML = startPos.coords.longitude;
        // };
      
        // navigator.geolocation.getCurrentPosition(geoSuccess);
        
        this.setState(this.getWeather)
    }

    getForecast() {
        return Axios.get(
            'api.openweathermap.org/data/2.5/weather?lat=36.078193399999996&lon=-94.1901826&APPID=5e309b45fc1941bd17f5ec40b712220f'
        )
    }

    getWeather() {
        this.getForecast(res => {
          this.setState(() => {
            return {
              forecast: res.data
            };
          });
        })
      }


    // componentDidUpdate() {
    //     this.setState(this.getWeather)
    // }

    

    render() {
        const forecast = this.state.forecast;

        return(
            <div className="forecast">
            {/* {!forecast && <Loading text="Sticking our hand out the window" />} */}
            {forecast &&
                this.state.forecast.list.map((item, i) => {
                return (
                    <div key={i}>
                    
                    <Link
                        to={{
                        pathname: `/detail/${this.state.searchTerm}`,
                        state: { weather: item }
                        }}>
                        <img
                        style={{ height: '50px' }}
                        src={`${process.env
                            .PUBLIC_URL}/images/weather-icons/${item.weather[0]
                            .icon}.svg`}
                        alt="Icon"
                        />
                        <p style={{ color: 'white' }}>
                        {_.capitalize(item.weather[0].description)}
                        </p>
                    </Link>
                    </div>
                );
                })}
            </div>

        )
    }
}

export default Weather