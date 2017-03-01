var shades = [10, 20, 45, 25, 60]

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  noStroke();
  for (var i = 0; i < shades.length; i += 1) {
    fill(shades[i], 100, 100);
    rect(i * width / 5, 0, width / 5, height);

  }
}
