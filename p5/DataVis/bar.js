var map;
var countryLocations, flowData, lithiumMining, cobaltMining; // data tables
var minFlow, maxFlow = null; // variables to store min and max quantities from flow data

var popUpFont;

function preload() {
	// load map picture
	map = loadImage("map.png");
	cars = loadImage("cars.png");
	art = loadImage("art.png");
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
 textSize(22);
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
  image(art,30,500,396,306);
  image(cars,600,50,1100,800);
  rect(475,25,1375,875);
 fill(255);
 noStroke();
  
  

	
 

  text('The negative effects of this growing demand for cobalt are starting to show in Congo. According to a washington post article: “An estimated 100,000 cobalt miners in Congo use hand tools to dig hundreds of feet underground with little oversight and few safety measures...”. This unregulated hazardous part of the supply chain may account for about 40% of cobalt production in Congo. ',70,70,300,900);
 
}

