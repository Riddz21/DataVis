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
 
 fill(255);
 noStroke();
  text(' According to a report by Avicenne Energy, Electric Vehicle sales are expected to reach as high as 5 million by the year 2020. These sales, on top of current demand for smartphones and laptops, drive the need for batteries with Lithium Ion being the preferred battery type. ',70,70,300,400);
 
}

