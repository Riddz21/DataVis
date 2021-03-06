var map;
var countryLocations, flowData, lithiumMining, cobaltMining; // data tables
var minFlow, maxFlow = null; // variables to store min and max quantities from flow data

var popUpFont;

function preload() {
	// load map picture
	map = loadImage("map.png");
	ring = loadImage("ring2.png");
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

 textFont("Prompt");
 textSize(25);
 textAlign(CENTER);
 angleMode(DEGREES);
 
}

function draw() {
  background(50);
  noFill();
  stroke(255);
  strokeWeight(4);
   rect(25,25,400,875);
  //rect(25,575,400,320);
  //image(cars, 575,27,1175,869);
  rect(475,25,1375,875);
  image(ring,30,550,396,306);
noFill();
	stroke(72,172,260);
	strokeWeight(45);
	strokeCap(SQUARE);	
	arc(1150,475,500,500,85,220);

	stroke(200,200,200);
	arc(1150,475,500,500,230,75);

	stroke(40,102,200,90);
	strokeWeight(22);
	arc(1150,475,500,500,85,135);
 
 fill(255);
strokeWeight(0.1);
  text('The negative effects of this growing demand for cobalt are starting to show in Congo. According to a washington post article: “An estimated 100,000 cobalt miners in Congo use hand tools to dig hundreds of feet underground with little oversight and few safety measures...”. This unregulated hazardous part of the supply chain may account for about 40% of cobalt production in Congo. ',70,70,300,900);
 
}

