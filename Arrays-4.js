var shades = [10, 20, 30, 40, 50,60,70,80,90]

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  noStroke();
  for (var i = 0; i < shades.length; i += 1) {
    fill(shades[i], 100, 100);


    rect(i * width / 9, 0, width / 9, height);

  }
}
