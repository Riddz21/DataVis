function setup() { 
	createCanvas(800, 600); 
	background(83,83,83); 
	angleMode(DEGREES);
}

function draw() {
	background(83,83,83); 

	noFill();
	stroke(72,172,260);
	strokeWeight(45);
	strokeCap(SQUARE);	
	arc(390,260,180,180,85,220);

	stroke(200,200,200);
	arc(390,260,180,180,230,75);

	stroke(40,102,200,90);
	strokeWeight(22);
	arc(390,260,180,180,85,135);
}



