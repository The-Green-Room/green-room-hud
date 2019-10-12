import React from 'react'

class Weather extends React.Component {
    constructor() {
        super()

        this.state = {
            temperature: 0
        }

        this.lat = 36.078350
        this.long = -94.190240
    }
    


    render() {
        return(
            <div>
                <p>69 degrees</p>
            </div>
        )
    }
}

export default Weather