export default function(s) {
  //constants
  const seedX = Math.random()
  const seedY = Math.random()
  const radX = 0.7
  const radY = 0.6
  let ampX
  let ampY

  const gif = {
      startLoop: 1,
      endLoop: 2,
      fileName: "noiseLoop2x.gif"
  }

  s.setup = function() {
    s.createCanvas(300, 300)
    s.colorMode(s.HSB, 1, 1, 1)
    s.frameRate(30)
    s.background(150)
    s.fill(127)
    s.noStroke()
    s.createLoop(3, { gif })
    ampX = s.width / 2.3
    ampY = s.height / 2.3
  }

  s.draw = function() {
    //background(255)
    s.fill(s.animLoop.progress, 0.5, 1)
    s.translate(s.width / 2, s.height / 2)
    const x = s.animLoop.noise({ radius: radX, seed: seedX }) * ampX
    const y = s.animLoop.noise({ radius: radY, seed: seedY }) * ampY
    s.ellipse(x, y, 50, 50)
  }
}