import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import '../../css/P5Wrapper.css'

import sketch from './sketch2'

export default class P5Wrapper extends Component {
    // static propTypes = {
    //     p5Props: PropTypes.object.isRequired,
    //     onSetAppState: PropTypes.func.isRequired,
    // }

    componentDidMount() {
        this.canvas = new window.p5(sketch, 'canvas-container')
        this.canvas.props = this.props.p5Props
    }

    shouldComponentUpdate(nextProps) {
        this.canvas.props = nextProps.p5Props
        return false
    }

    componentWillUnmount() {
        this.canvas.remove()
    }

    render() {
        return(
            <div id='canvas-container' className="canvas-container">

            </div>
        )
    }
}