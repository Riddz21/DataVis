var	img;	
function preload()	
{	
		img	=	loadImage("world.png");	
}	


function setup() 
{
 createCanvas(2000,4000);
}

function draw() 
{
noStroke();
//fill(200,200,200,50);
rect(10,20,400,600);

text('As you view this page there is a good chance your using a device powered by a battery. From smartphones to laptops and even vehicles, power supplied by batteries is becoming a critical part of modern life. While this does provide us with an increase in convenience, we may not see the hidden consequences of our growing demand. The materials that make up these batteries and the countries who produce them are now starting feel the strains of supporting a wireless world.', 20, 30,350,400);
rect(10,630,400,290);
rect(430,20,1440,900);
 //scale(1.2);
 image(img,	430,50,	1000,	700);	
 rect(10,1020,400,600);

rect(10,1020,400,600);
text('As you view this page there is a good chance your using a device powered by a battery. From smartphones to laptops and even vehicles, power supplied by batteries is becoming a critical part of modern life. While this does provide us with an increase in convenience, we may not see the hidden consequences of our growing demand. The materials that make up these batteries and the countries who produce them are now starting feel the strains of supporting a wireless world.', 20, 1030,350,400);
rect(10,1630,400,290);
rect(430,1020,1440,900);

 image(img,	430,1050,	1000,	700);





//print('this is working');

}