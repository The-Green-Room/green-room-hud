export default function (s) {
    s.props = {}
    s.onSetAppState = () => {}

    // Constants
    const Y_AXIS = 1;
    const X_AXIS = 2;
    //let b1, b2;
    let c1, c2;

    let r1 = 204
    let g1 = 192
    let b1 = 0
    let r2 = 0
    let g2 = 102
    let b2 = 153

    // let r1DirectionForeward = true
    let g1DirectionForeward = true
    // let b1DirectionForeward = true
    // let r2DirectionForeward = true
    // let g2DirectionForeward = true
    let b2DirectionForeward = true

    s.setup = function() {
        s.createCanvas(window.innerWidth, window.innerHeight)
        s.frameRate(4)
        
        // Define colors
        c1 = s.color(r1 % 255, g1 % 255, b1 % 255)
        c2 = s.color(r2 % 255, g2 % 255, b2 % 255)
    }

    s.draw = function() {
        s.setGradient(0, 0, s.width / 2, s.height, c1, c2, Y_AXIS)
        s.setGradient(s.width/2, 0, s.width/2, s.height, c1, c2, Y_AXIS)

        s.changeColors()
    }

    s.changeColors = function() {
        if (g1DirectionForeward && g1 > 255) {
            g1DirectionForeward = false   
            console.log('g1 direction ' + g1DirectionForeward)       
        } else if (!g1DirectionForeward && g1 < -255) {
            g1DirectionForeward = true
        } else if (g1DirectionForeward) {
            g1++
            console.log('foreward g1 ' + g1)
        } else if (!g1DirectionForeward) {
            g1--
            console.log('reverse g1 ' + g1)
        }

        if (b2DirectionForeward && b2 > 255) {
            b2DirectionForeward = false      
            console.log('b2 direction ' + g1DirectionForeward)    
        } else if (!b2DirectionForeward && b2 < -255) {
            b2DirectionForeward = true
            console.log('b2 direction ' + g1DirectionForeward)
        } else if (b2DirectionForeward) {
            b2++
            console.log('foreward b2 ' + b2)
        } else if (!b2DirectionForeward) {
            b2--
            console.log('reverse b2 ' + b2)
        }

        c1 = s.color(r1, g1, b1)
        c2 = s.color(r2, g2, b2)
    }

    s.setGradient = function(x, y, w, h, c1, c2, axis) {
        s.noFill();

        if (axis === Y_AXIS) {
            // Top to bottom gradient
            for (let i = y; i <= y + h; i++) {
            let inter = s.map(i, y, y + h, 0, 1);
            let c = s.lerpColor(c1, c2, inter);
            s.stroke(c);
            s.line(x, i, x + w, i);
            }
        } else if (axis === X_AXIS) {
            // Left to right gradient
            for (let i = x; i <= x + w; i++) {
            let inter = s.map(i, x, x + w, 0, 1);
            let c = s.lerpColor(c1, c2, inter);
            s.stroke(c);
            s.line(i, y, i, y + h);
            }
        }
    }
}