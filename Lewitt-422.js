
var hues = [25, 49, 349, 197, 48, 355, 200,11,69,348,12,71,336,28,16]
var saturations = [12, 73, 67, 50, 65, 58, 37,69,59,30,85,63,34,64,64]
var brightnesses = [79, 95, 85, 84, 92, 80, 69,89,56,38,82,58,38,41,39]
function setup() {
  createCanvas(1000, 200);
  colorMode(HSB)
  noStroke();
  for (var i = 0; i < hues.length; i += 1) {
    fill(hues[i], saturations[i], brightnesses[i]);
    rect(i * width / hues.length, 0, width / hues.length, height);

  }
}
