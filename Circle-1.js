var sizes = [40, 10, 30, 80, 60,30,20,40,90,30];

function setup() {
createCanvas(600, 600);

noStroke();

for (var i = 0; i < sizes.length ; i += 1) {
fill(sizes[i]);
ellipse(50+i*50, height/2, sizes[i], sizes[i]);
}
}
