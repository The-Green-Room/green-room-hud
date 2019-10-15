import React from 'react'

class Weather extends React.Component {
    constructor() {
        super()

        this.state = {
            temperature: 0
        }

        // Default lat and long
        this.lat = 36.078193399999996;
        this.long = -94.1901826;
    }
    
    // TODO: Ask for current location and call api based on that
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
                <p>69 degrees</p>
            </div>
        )
    }
}

export default Weather