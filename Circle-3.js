var sizes = [5, 15, 15, 10, 150, 130, 50, 50, 3];

function setup() {
  createCanvas(900, 400);




  background(255);
 
  for (var i = 0; i < sizes.length; i += 1) {
    
    h = random(5,100);
    s = random(10, 100);
    b = random(10,100);
    noStroke();
    colorMode(HSB);
    fill(sizes[i], s, b);
    ellipse(50 + i * 100, height / 2, sizes[i], sizes[i]);
  }
}
