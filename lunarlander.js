// Ufo
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
  fill(213, 218, 255, 180);
  vertex(x - 40, y);
  bezierVertex(x - 30, y - 20, x, y - 60, x + 40, y);
  bezierVertex(x + 40, y + 10, x - 10, y + 30, x - 40, y);
  endShape();
}

// Flames
function flames(x, y) {
  push();
  noStroke();
  // The following 4 lines of code were taken from https://www.youtube.com/watch?v=cl5FW_zgY_Q Accessed: 2023-02-27
  fill(77, 0, 145, 140);
  ellipse(x, y + random(35, 55), 40, 60);
  fill(156, 43, 255, 140);
  ellipse(x, y + random(35, 50), 32, 40);
  fill(255, 255, 255, 140);
  ellipse(x, y - 10 + random(35, 50), 22, 40);
  pop();
}

// Crashed ufo parts
function crashedUfo(x, y) {
  strokeWeight(4);

  // Top antenna
  fill(252, 247, 146);
  line(x, y - 50, x, y - 30);
  ellipse(x, y - 50, 10);

  // "Legs"
  fill(182, 182, 182);

  // Left leg
  push();
  translate(x - 130, y + 40);
  rotate(1.3);
  rect(0, 0, 6, 24);
  pop();

  // Left dot leg
  push();
  translate(x - 110, y + 54);
  rotate(0.9);
  ellipse(0, 0, 12, 6);
  pop();

  // Right Leg
  push();
  translate(x + 106, y + 3);
  rotate(-0.5);
  rect(0, 0, 6, 24);
  pop();

  // Right dot leg
  push();
  translate(x + 150, y + 48);
  rotate(-0.9);
  ellipse(0, 0, 12, 6);
  pop();

  // Bottom
  push();
  translate(x + 30, y + 23);
  rotate(-0.5);
  fill(182, 182, 182);
  ellipse(0, 0, 85, 40);
  pop();

  // Middle
  push();
  translate(x - 100, y - 50);
  rotate(-9);
  fill(252, 247, 146);
  ellipse(0, 0, 130, 50);
  pop();

  // Top
  push();
  beginShape();
  fill(213, 218, 255, 180);
  vertex(x - 40, y);
  bezierVertex(x - 30, y - 20, x, y - 60, x + 40, y);
  bezierVertex(x + 40, y + 10, x - 10, y + 30, x - 40, y);
  rotate(6.42);
  endShape();
  pop();
}

// Sun for scenery
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

// Scenery
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
  sun(400, 410);

  // Earth landing surface
  fill(105, 23, 98);
  rect(0, 460, width, height);
  pop();
}

// Screens
// Menu screen
function menuScreen() {
  scenery();
  fill(0, 0, 0);
  textSize(34);
  textStyle(BOLD);
  text("CLICK TO START GAME", 210, 250);
  textSize(24);
  text("Use the spacebar to slow down the speed", 162, 300);
}

// Game over screen
let crashedY = 410;
let speed = 14;
let crashActive = true;

function gameOverScreen() {
  scenery();
  crashedUfo(400, crashedY);
  fill(0, 0, 0);
  text("GAME OVER", 330, 250);
  textSize(24);
  text("Click to restart the game", 264, 300);

  if (crashActive) {
    crashedY = crashedY - speed;
  }
  if (crashedY <= 150) {
    crashActive = false;
  }
}

// You win screen
function youWinScreen() {
  scenery();
  ufo(400, 410);
  fill(0, 0, 0);
  text("YOU WIN", 348, 250);
  textSize(24);
  text("Click to restart the game", 264, 300);
}

// Restarts the game when mouse is clicked
function mouseClicked() {
  if (screen === 0 || screen == 3 || screen == 2) {
    console.log("Mouse clicked");
    // Restarts the game
    ufoY = -60;
    velocity = 1;
    screen = 1;
  }
}

// Game screen
let ufoY = -60;
let velocity = 1.5;
let acceleration = 0.2;
let screen = 0;

function gameScreen() {
  scenery();
  /* ufo(400, ufoY); */

  ufoY = ufoY + velocity;

  // When spacebar is down, velocity slows down, otherwise increases
  if (keyIsDown(32)) {
    flames(400, ufoY);
    ufo(400, ufoY);
    velocity = velocity - 0.2;
  } else {
    ufo(400, ufoY);
    velocity += 0.2;
  }
  console.log(velocity);

  // Stops on the ground, gives result depending on velocity
  if (ufoY > 410) {
    if (velocity > 2) {
      screen = 2; // Game over
    }
    if (velocity < 2) {
      screen = 3; // You win
    }
  }
}

// Assigned numbers to the screens
// The  following 11 lines of code was adapted from https://www.youtube.com/watch?v=RlsRQS5qFSY&list=LL&index=2 Accessed: 2023-02-12
function draw() {
  if (screen === 0) {
    menuScreen();
  } else if (screen === 1) {
    gameScreen();
  } else if (screen === 2) {
    gameOverScreen();
  } else if (screen === 3) {
    youWinScreen();
  }
}
