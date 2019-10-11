export default function (s) {
    s.props = {}
    s.onSetAppState = () => {}

    // Constants
    const Y_AXIS = 1;
    const X_AXIS = 2;
    let b1, b2, c1, c2;

    s.setup = function() {
        s.createCanvas(window.innerWidth, window.innerHeight)
        
        // Define colors
        b1 = s.color(255);
        b2 = s.color(0);
        c1 = s.color(204, 102, 0);
        c2 = s.color(0, 102, 153);

        s.noLoop();
        // console.log('::: displayDensity:', s.displayDensity())
        // console.log('::: pixelDensity:', s.pixelDensity())
    }

    s.draw = function() {
        s.setGradient(0, 0, window.innerWidth / 2, window.innerHeight, b1, b2, X_AXIS);
        
    }

    s.setGradient = function(x, y, w, h, c1, c2, axis) {
        s.noFill();

        if (s.axis === Y_AXIS) {
            // Top to bottom gradient
            for (let i = y; i <= y + h; i++) {
            let inter = s.map(i, y, y + h, 0, 1);
            let c = s.lerpColor(c1, c2, inter);
            s.stroke(c);
            s.line(x, i, x + w, i);
            }
        } else if (s.axis === X_AXIS) {
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