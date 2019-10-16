import React from 'react'
import ReactWeather from 'react-open-weather'

class Weather extends React.Component {
    constructor() {
        super()

        this.state = {
            temperature: 0
        }

        // Default lat and long
        this.lat = 36.078193399999996;
        this.lon = -94.1901826;
        this.apikey="2a8bf8ec10b65fdc9695467f42bef9b2"
    }
    
    // TODO: Ask for current location and call api based on that
    // refer to this maybe: https://stackoverflow.com/questions/13194623/get-location-when-pages-loads

    // componentDidMount() {
    //     var startPos;
        
    //     var geoSuccess = function(position) {
    //       // Do magic with location
    //       startPos = position;
    //       document.getElementById('startLat').innerHTML = startPos.coords.latitude;
    //       document.getElementById('startLon').innerHTML = startPos.coords.longitude;
    //     };
      
    //     navigator.geolocation.getCurrentPosition(geoSuccess);
        
    // }

    

    render() {
        return(
            <div>
                <ReactWeather 
                    forecast="5days" 
                    unit="imperial"
                    apikey={this.apikey}
                    type="geo"
                    lat={this.lat}
                    lon={this.lon}
                />
            </div>
        )
    }
}

export default Weather