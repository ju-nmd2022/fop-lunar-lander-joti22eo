// Ufo
function ufo(x, y) {
  strokeWeight(4);

  // Flames
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
// The  following 38 lines of code were taken from https://www.youtube.com/watch?v=RlsRQS5qFSY&list=LL&index=2 2023-02-12.
/* var screen = 0; */
/* let ufoX = 100; */
/* let ufoY = 100; */
/* let velocity = -1; */
/* let acceleration = -0.01; */
/*  */
/* function menuScreen() { */
/*   scenery(); */
/*   textFont(); */
/*   textSize(40); */
/*   textAlign(CENTER); */
/*   text("CLICK TO PLAY", 400, 300); */
/* } */
/*  */
/* function gameScreen() { */
/*   scenery(); */
/*   ufo(ufoX, ufoY); */
/*  */
/*   if (keyIsDown(40)) { */
/*     ufoY = ufoY + 10; */
/*   } */
/*  */
/*   ufoX = ufoX + 0.5; */
/*   ufoY = ufoY + velocity; */
/*   velocity = velocity + acceleration; */
/*  */
/*   if (ufoY > 460) { */
/*     gameOverScreen(); */
/*   } */

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
function gameOverScreen() {
  scenery();
  fill(0, 0, 0);
  text("GAME OVER", 330, 250);
}

// You win screen
function youWinScreen() {
  scenery();
  fill(0, 0, 0);
  text("YOU WIN", 355, 250);
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

let ufoY = -60;
let velocity = 1.5;
let acceleration = 0.2;
let screen = 0;

function gameScreen() {
  scenery();
  ufo(400, ufoY);

  ufoY = ufoY + velocity;

  if (keyIsDown(32)) {
    velocity = velocity - 0.2;
  } else {
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
