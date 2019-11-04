function setup() {
  createCanvas(1080, 720);
}

function draw() {
  if (mouseIsPressed) {
    fill (10);
  } else {
    fill(800);
  }
  ellipse(mouseX, mouseY, 20, 20);
}