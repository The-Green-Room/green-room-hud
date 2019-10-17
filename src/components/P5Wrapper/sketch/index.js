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

    s.setup = function() {
        s.createCanvas(window.innerWidth, window.innerHeight)
        
        // Define colors
        c1 = s.color(r1 % 255, g1 % 255, b1 % 255);
        c2 = s.color(r2 % 255, g2 % 255, b2 % 255);
    }

    s.draw = function() {
        s.setGradient(0, 0, s.width / 2, s.height, c1, c2, Y_AXIS)
        s.setGradient(s.width/2, 0, s.width/2, s.height, c1, c2, Y_AXIS)
        
        s.changeColors()
    }

    s.changeColors = function() {
        
        r1++
        //g1++
        //b1++
        //r2++
        // g2++
        // b2++

        c1 = s.color(r1 % 255, g1 % 255, b1 % 255);
        c2 = s.color(r2 % 255, g2 % 255, b2 % 255);
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