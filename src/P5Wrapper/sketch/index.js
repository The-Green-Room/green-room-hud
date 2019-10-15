export default function (s) {
    s.props = {}
    s.onSetAppState = () => {}

    // Constants
    const Y_AXIS = 1;
    const X_AXIS = 2;
    //let b1, b2;
    let c1, c2;
    let c;

    s.setup = function() {
        s.createCanvas(window.innerWidth, window.innerHeight)
        
        // Define colors
        //s.colorMode(s.HSB);
        // b1 = s.color(255);
        // b2 = s.color(0);
        c1 = s.color(255, 0, 0);
        c2 = s.color(0, 102, 153);

        s.noLoop();
        // console.log('::: displayDensity:', s.displayDensity())
        // console.log('::: pixelDensity:', s.pixelDensity())
    }

    s.draw = function() {
        // Background
        //s.setGradient(0, 0, s.width / 2, s.height, b1, b2, X_AXIS);
        //s.setGradient(s.width / 2, 0, s.width / 2, s.height, b2, b1, X_AXIS);
        // Foreground
        //s.setGradient(50, 90, 540, 80, c1, c2, Y_AXIS);
        //s.setGradient(50, 190, 540, 80, c2, c1, X_AXIS);

        if (c >= 255) c=0; else c++;
        
        s.setGradient(0, 0, s.width / 2, s.height, c1, c2, Y_AXIS)
        s.setGradient(s.width/2, 0, s.width/2, s.height, c1, c2, Y_AXIS)
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