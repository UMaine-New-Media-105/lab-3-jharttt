function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  createBear();
}
function createBear(){
  ellipse(160, 160, 50);
  if (mouseIsPressed == true){
    fill(200, 100, 200);
  }else if (mouseX > 200){
      fill(20, 50, 100);
  }else {
    fill(255, 255, 0);
  }
  ellipse(240, 160, 50);
  ellipse(200, 200, 100);
}
