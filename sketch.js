//This is set up for the function at the bottom of the code to change The
//fill color of my ovals when the mouse is clicked.
let fillClicked = true;
function setup () {

  createCanvas (1024, 768);
//I chose the below fill color to mimic the painting
  background (251, 255, 216);
}


function draw () {

  //here I wanted to layer two objects (an ellipse and a triangle) by using
  //similar placement and transparency. The ellipse is blue to mimic the blue
  //moon in the painting.
  fill (35, 5, 74);
  triangle(750, 90, 650, 200, 700, 250);
  fill (14, 106, 140, 150);
  ellipse(750, 90, 140, 140);


  //I wanted to create a V type shape using lines. Try to have the
  //ellipse above the V
  stroke(0,0,0);
  strokeWeight(3);
  line(600, 400, 500, 300);
  line(600, 300, 500, 400);
  //here I'm drawing two rectangles on top of each other like the painting.
  fill(0, 0, 165);
  stroke (0, 0, 0);
  strokeWeight (1.5);
  rect(200, 200, 85, 20);
  noStroke();
  fill(153, 0, 0);
  rect(200, 220, 85, 20);
//here I'm using the beginShape(), vertex, and endShape() to create a longer
//rectangle. This is a random shape I added to mimic the random placement of
//minimalist shapes like the painting.
  fill (101, 129, 114);
  beginShape(QUAD_STRIP);
  vertex(600, 20);
  vertex(600, 75);
  vertex(60, 20);
  vertex(60, 75);
  vertex(80, 20);
  vertex(80, 75);
  vertex(90, 20);
  vertex(90, 75);
  endShape();
  //here I wanted to use a for loop to create a pattern of ovals toward the
 //bottom of the Canvas as well as a conditional to set up the function
 //if (fillClicked) to change the fill when the mouse is clicked.
    if (fillClicked) {
  fill (33, 9, 19);
    } else {

    }
  for (let x = 0; x <= width; x = x + 60) {
    ellipse (x, 500, 50, 90);

  }

}

function mousePressed (){
  // toggle variable between true and false
    fillClicked = !fillClicked;
}

