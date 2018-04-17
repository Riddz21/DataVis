var map;
var countryLocations, flowData, lithiumMining, cobaltMining; // data tables
var minFlow, maxFlow = null; // variables to store min and max quantities from flow data

var popUpFont;

function preload() {
	// load map picture
	map = loadImage("map.png");
	// load data files
	countryLocations = loadTable('country_map_locations.csv', 'csv', 'header');
	flowData = loadTable('cobalt-flow-2005.csv', 'csv', 'header');
	lithiumMining = loadTable('lithium-mine-production-2017.csv', 'csv', 'header');
	cobaltMining = loadTable('cobalt-mine-production-2017.csv', 'csv', 'header');
	// load font
	//popUpFont = loadFont("VarelaRound-Regular.ttf");
}

function setup() {
  createCanvas(1880,1000);
 // textFont(popUpFont);
 
}

function draw() {
  background(50);
  noFill();
  stroke(255);
  strokeWeight(4);
  rect(25,25,400,520);
  rect(25,575,400,320);
  rect(475,25,1375,875)
 //drawBubbles(550,100,1300,800);
 fill(255);
 noStroke();
  text('Lithium Ion batteries of course contain lithium but also rely on other elements to make them work. Among these elements is Cobalt. Cobalt is of particular interest due to where and how it is sounced.',70,70,300,400);
  //drawCobaltFlowNetwork(500,75,1300,800);
}

function drawMap(x,y,w,h) {
	push();
	translate(x,y);
	strokeWeight(4);
	stroke(255);
	noFill();
	image(map,0,0,w,h);

	rect(0-50,0-50,w+100,h+70)
	pop();
}

/**
Function for drawing bubbles according to mining data.

TO DO;
	-download and add Nickel data (remember to compute share percentage)
*/
function drawBubbles(x,y,w,h) {

	// STYLE PARAMETERS
	var low = 20; // smallest bubble radius
	var high = 150; // biggest bubble radius
	// lithium color values
	var lithiumR = 0;
	var lithiumG = 255;
	var lithiumB = 0;
	var lithiumO = 120; // opacity
	// cobalt color values
	var cobaltR = 0;
	var cobaltG = 0;
	var cobaltB = 255;
	var cobaltO = 120; // opacity

	var activeCountries = []; // array to store all the active countries for interactivity

	push();
	translate(x,y);
	drawMap(0,0,w,h);

	noStroke();
	fill(lithiumR, lithiumG, lithiumB, lithiumO);

	// draw bubbles for lithium countries
	for (var i = 0; i < lithiumMining.getRowCount(); i++) {
		var row = lithiumMining.getRow(i);
		var country = countryLocations.findRow(row.getString('Country'), 'Country');

		// add to active country list for interactivity
		activeCountries.push(country);
		
		var size = mapper(row.getNum('Percentage'), 0, .5, low, high);
		if (country != null) {
			ellipse(country.getNum(1)*w, country.getNum(2)*h, size,size);
		}
	
	}

	fill(cobaltR, cobaltG, cobaltB, cobaltO);

	// draw bubbles for cobalt countries
	for (var j = 0; j < cobaltMining.getRowCount(); j++) {
		var row = cobaltMining.getRow(j);
		var country = countryLocations.findRow(row.getString('Country'), 'Country');

		// add to active country list for interactivity
		activeCountries.push(country);

		var size = mapper(row.getNum('Percentage'), 0, .5, low, high);
		if (country != null) {
			ellipse(country.getNum(1)*w, country.getNum(2)*h, size,size);
		}
	}

	// popup text style parameters
	textAlign(CENTER);
	fill(255);

	// display quantities for hovering mouse
	for (var c = 0; c < activeCountries.length; c++) {
		if (activeCountries[c] != null) {
			if (dist(mouseX,mouseY,activeCountries[c].getNum('x')*w,activeCountries[c].getNum('y')*h) < 15) {
				
				textSize(h/25);
				text(activeCountries[c].getString('Country'), activeCountries[c].getNum('x')*w, activeCountries[c].getNum('y')*h);

				textSize(h/37); // reduce text size for subtitle
				var cobaltQ = cobaltMining.findRow(activeCountries[c].getString('Country'), 'Country');
				if (cobaltQ != null) { 
					cobaltQ = cobaltQ.getNum('Metric Tons'); 
				}
				var lithiumQ = lithiumMining.findRow(activeCountries[c].getString('Country'), 'Country');
				if (lithiumQ != null) { 
					lithiumQ = lithiumQ.getNum('Tons'); 
				}

				if (cobaltQ != null && lithiumQ != null) {
					text(lithiumQ + " tons lithium", activeCountries[c].getNum('x')*w, activeCountries[c].getNum('y')*h + h/35);
					text(cobaltQ + " tons cobalt", activeCountries[c].getNum('x')*w, activeCountries[c].getNum('y')*h + 2*h/35);
				} else if (cobaltQ != null) {
					text(cobaltQ + " tons cobalt", activeCountries[c].getNum('x')*w, activeCountries[c].getNum('y')*h + h/35);
				} else if (lithiumQ != null) {
					text(lithiumQ + " tons lithium", activeCountries[c].getNum('x')*w, activeCountries[c].getNum('y')*h + h/35);
				}
			
			}
		}
	}


	pop();
}

/*
Function for drawing lines between cobalt-exchanging countries.
	TO DO: represent lines differently to show start vs end
*/
function drawCobaltFlowNetwork(x,y,w,h) {

	// STYLE PARAMETERS
	var low = 1; // smallest line weight
	var high = 20; // biggest line weight
	var opacity = 120;
	var r = 0;
	var g = 80;
	var b = 255;


	push();
	translate(x,y);
	drawMap(0,0,w,h);

	fill(255,0,0);
	stroke(0,255,0);

//	iterate through edge list
	for (var i = 1; i < flowData.getRowCount(); i++) {

		var row = flowData.getRow(i);

		var origin = countryLocations.findRow(row.getString('Origin Country'), 'Country');
		var destination = countryLocations.findRow(row.getString('Destination Country'), 'Country');
		var kilotons = row.getNum('kilotons');

		stroke(r, g, b, opacity);
		if (origin != null && destination != null) {
			var amt = mapper(kilotons, 500,8000,low,high);
			
			// FIXME: finish gradient line function -- the line is just temporary
			//drawGradientLine(amt, origin.getNum(1)*w, origin.getNum(2)*h, destination.getNum(1)*w, destination.getNum(2)*h);
			 strokeWeight(amt);
			 line(origin.getNum(1)*w, origin.getNum(2)*h, destination.getNum(1)*w, destination.getNum(2)*h);
		}
		
	}


	pop();
}

// wrote a map function because it wouldn't recognize the regular one
function mapper(value, min, max, low, high) {
	return (((value - min) / (max - min)) * (high-low)) + low;
}

// function for drawing gradient line between countries
//    UNFINISHED
function drawGradientLine(weight, startX, startY, endX, endY) {
	var startColor = color(0,0,255);
	var endColor = color(255,255,255);

	var d = dist(startX,startY,endX, endY);
	var theta = asin((endY-startY) / d);

	noStroke();

	for (var i = 0; i < dist(startX,startY,endX, endY); i++) {
		fill(lerpColor(startColor, endColor, i/dist));
		ellipse(startX + i*cos(theta), startY + i*sin(theta), weight, weight);
	}
}




