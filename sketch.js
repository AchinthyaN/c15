var ball = {
  x: 200,
  y: 200,
  r: 20,
  colour:["red", "blue", "green"]
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(ball.colour[2]);
  circle(ball.x, ball.y, ball.r);
}