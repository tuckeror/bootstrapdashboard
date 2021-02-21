// SMAD - James Madison University
// http://smad.jmu.edu 
// Olivia Tucker - tuckeror@dukes.jmu.edu
// Custom Orders

//setting up canvas
function setup() {
	var canvas = createCanvas(1000, 1150);
    canvas.parent('sketchdiv');
	background('#A4CDDC');
}

let customerData;

//importing data
function preload() {
	 customerData = loadTable("auction-orders.csv", "csv", "header");
}

function getSum(total, num) {
	return total + num;
}

function draw() {
	let x = 200;
	let y = 200;
	

// creating array
let customerArray = customerData.getArray();

// stop p5js after first loop
// color name, count,dates, and boxes data 
noLoop();
	for (let i = 0; i < customerArray.length; i++) {
		let customerName = customerArray[i][1];
		let customerDate = customerArray[i][3];
		let customerBoxes = customerArray[i][5];
		
	// header text
	fill('#575355');
  textFont('Arial', 60);
  text("Customer Orders", 240, 100);
		
	// column titles text	
	fill('#6C696B');
  textFont('Arial', 30);
	text("Name", 240, 170);
	text("Date", 485, 170);
	text("# of Boxes", 665, 170);
	
	// creating data columns
	textSize(32);
	fill('white');
	text(customerBoxes, x+505, y+25);
	text(customerDate, x+255, y+25);
	text(customerName, x+40, y+25);
	y +=50;
	
	}
}
