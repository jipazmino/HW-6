function setup() {
	createCanvas(800, 400);
}

var x = 30

function draw() {
	background(230)
	noStroke()
	beginShape(fill(200))
	vertex(50, 150)
	vertex(150, 150)
	vertex(150, 250)
	vertex(250, 250)
	vertex(250, 350)
	vertex(50, 350)
	endShape(CLOSE)
	
	fill(200)
	rect(200, 100, 100, 100)

	beginShape(fill(180))
	vertex(50, 150)
	vertex(150, 50)
	vertex(350, 50)
	vertex(300, 100)
	vertex(200, 100)
	vertex(150, 150)
	endShape(CLOSE)
	
	beginShape(fill(150))
	vertex(150,250)
	vertex(150,150)
	vertex(200,100)
	vertex(200,200)
	endShape(CLOSE)
	
	beginShape(fill(180))
	vertex(150,250)
	vertex(200,200)
	vertex(300,200)
	vertex(250,250)
	endShape(CLOSE)
	
	beginShape(fill(160))
	vertex(250,250)
	vertex(250,350)
	vertex(350,250)
	vertex(350,50)
	vertex(300,100)
	vertex(300,200)
	endShape(CLOSE)
	
	fill(200)
	rect(450,150,200,200)
	
	beginShape(fill(180))
	vertex(450, 150)
	vertex(550, 50)
	vertex(750, 50)
	vertex(650, 150)
	endShape(CLOSE)
	
	beginShape(fill(160))
	vertex(650,150)
	vertex(650,350)
	vertex(750,250)
	vertex(750,50)
	endShape(CLOSE)
	
	fill(145)
	triangle(550,150,650,250,700,100)
}
