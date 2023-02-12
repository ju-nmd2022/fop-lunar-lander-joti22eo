function ufo(x, y) {
  strokeWeight(4);

  // Top antenna
  fill(252, 247, 146);
  line(x, y - 50, x, y - 30);
  ellipse(x, y - 50, 10);

  // "Legs"
  fill(182, 182, 182);

  // Left leg
  push();
  translate(x - 20, y + 30);
  rotate(0.5);
  rect(0, 0, 6, 24);
  pop();

  // Left dot leg
  push();
  translate(x - 30, y + 54);
  rotate(0.5);
  ellipse(0, 0, 12, 6);
  pop();

  // Right Leg
  push();
  translate(x + 16, y + 33);
  rotate(-0.5);
  rect(0, 0, 6, 24);
  pop();

  // Right dot leg
  push();
  translate(x + 31, y + 54);
  rotate(-0.5);
  ellipse(0, 0, 12, 6);
  pop();

  // Bottom
  fill(182, 182, 182);
  ellipse(x, y + 20, 85, 40);

  // Middle
  fill(252, 247, 146);
  ellipse(x, y + 8, 130, 50);
  ellipse(x - 42, y + 14, 8);
  ellipse(x, y + 24, 8);
  ellipse(x + 42, y + 14, 8);

  // Top
  beginShape();
  /* ellipse(x, y + 2, 80, 20); */
  fill(213, 218, 255, 180);
  vertex(x - 40, y);
  bezierVertex(x - 30, y - 20, x, y - 60, x + 40, y);
  bezierVertex(x + 40, y + 10, x - 10, y + 30, x - 40, y);
  endShape();
}

function sun(x, y) {
  push();
  noStroke();
  fill(255, 255, 136, 50);
  ellipse(x, y, 230);
  fill(255, 255, 136, 100);
  ellipse(x, y, 180);
  fill(255, 255, 136, 200);
  ellipse(x, y, 140);
  fill(255, 255, 136);
  ellipse(x, y, 80);
  pop();
}

function scenery() {
  push();
  noStroke();

  // Background sunset
  background(239, 195, 157);
  fill(209, 84, 140);
  rect(0, 0, width, 200);
  fill(245, 130, 101, 200);
  rect(0, 100, width, 150);
  fill(250, 174, 132, 200);
  rect(0, 250, width, 100);
  fill(255, 255, 136, 80);
  rect(0, 300, width, 120);

  // Sun
  sun(400, 350);

  // The moon surface
  fill(105, 23, 98);
  rect(0, 400, width, 200);
  // "Surface holes"
  ellipse(100, 430, 140, 90);
  ellipse(600, 420, 140, 60);
  ellipse(700, 405, 60, 20);

  // Shade
  beginShape();
  fill(94, 22, 87);
  vertex(210, 520);
  bezierVertex(160, 580, 280, 560, 270, 520);
  endShape();

  // "Light shade"
  fill(166, 78, 158);
  ellipse(606, 408, 80, 20);
  ellipse(97, 405, 80, 20);
  ellipse(239, 524, 60, 20);

  // "Dark shade"
  fill(85, 20, 79);
  ellipse(602, 405, 80, 20);
  ellipse(100, 402, 80, 20);
  ellipse(240, 524, 50, 18);
  pop();
}

function draw() {
  scenery();
  ufo(100, 100);
}
