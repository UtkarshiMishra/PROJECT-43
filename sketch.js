var hour;
var second;
var minute;

function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);

 
  angleMode(DEGREES);

 /* let h = hour();
  text('Current hour:\n' + h, 5, 50);

  let m = minute();
  text('Current minute: \n' + m, 5, 50);

  let s = second();
  text('Current second: \n' + s, 5, 50);*/

 

 // scAngle = map(sc,0,60,0,360) 

}

function draw() {
  background(0);  

  translate(200,200);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();
 
  noFill();
  strokeWeight(5)

  stroke(255,0,0)
  scAngle = map(sc,0,60,0,360) 
  arc(0,0,220,220,0,scAngle)

  stroke(0,0,255)
  mnAngle = map(mn,0,60,0,360)
  arc(0,0,200,200,0,mnAngle)

  stroke(0,255,0)
  hrAngle = map(hr%12,0,12,0,360)
  arc(0,0,180,180,0,hrAngle)
  
  stroke(255,0,255);
  point(0,0);
 
  //arc(50, 55, 50, 50, 0, HALF_PI);
  /*noFill();
  arc(50, 55, 60, 60, HALF_PI, PI);
  arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
  arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);*/

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(0,0,255);
  strokeWeight(9);
  line(0,0,80,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0,255,0);
  strokeWeight(11);
  line(0,0,50,0);
  pop();



  drawSprites();
}