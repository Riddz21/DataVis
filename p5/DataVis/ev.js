var map;
var countryLocations, flowData, lithiumMining, cobaltMining; // data tables
var minFlow, maxFlow = null; // variables to store min and max quantities from flow data

var popUpFont;

function preload() {
	// load map picture
	map = loadImage("map.png");
	cars = loadImage("cars.png");
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
noFill();
	stroke(72,172,260);
	strokeWeight(45);
	strokeCap(SQUARE);	
	arc(600,600,180,180,85,220);

	stroke(200,200,200);
	arc(600,600,180,180,230,75);

	stroke(40,102,200,90);
	strokeWeight(22);
	arc(600,600,180,180,85,135);
 
 fill(255);
strokeWeight(0.1);
  text('Why is the growth of  Electric Vehicles an issue related to cobalt? One electric vehicle requires around 15 pounds of Cobalt for its battery. For context, that same 15 pounds of cobalt is equivalent to the amount used in 240 laptops or 680 smartphones.  ',70,70,300,400);
 
}

