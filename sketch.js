let palette;
let selectedHead = null;
let button;
let animating = false;
let offsetY = 0;
let leftColor;
let rightColor;
const headRadius = 35;
const headDiameter = 70;

function setup() {
  createCanvas(800, 800);

  generatePalette();
  pickColors();

  button = createButton("Suivant !");
  button.position(365, 150);
  button.mousePressed(onButtonPressed);
}

function drawLabel() {
  fill('black');
  textAlign(CENTER);
  textSize(15);
  text("Cliquez sur une tête !", 400, 220);
}

function draw() {
  background(220);
  noStroke();
  drawLabel();

  if (animating) {
    offsetY += 10;
    if (offsetY > height + 100) {
      animating = false;
      offsetY = 0;
      selectedHead = null;
      generatePalette();
      pickColors();
    }
  }

  const leftHeadX = width / 2 - 100;
  const rightHeadX = width / 2 + 100;
  const headY = height / 2 - 50 + offsetY;
  const torsoY = height / 2 + 45 + offsetY;

  fill(leftColor);
  ellipse(leftHeadX, torsoY, 80, 120);
  fill(leftColor);
  circle(leftHeadX, headY, headDiameter);

  fill(rightColor);
  ellipse(rightHeadX, torsoY, 80, 120);
  fill(rightColor);
  circle(rightHeadX, headY, headDiameter);

  if (selectedHead === 'left') {
    fill('red');
    circle(leftHeadX, headY - 15, 10);
  } else if (selectedHead === 'right') {
    fill('red');
    circle(rightHeadX, headY - 15, 10);
  }
}

function generatePalette() {
  palette = ['#C4A68A', '#6B4A43', '#3F6857', '#A1E2AC', '#1A3654', '#F7F0A1', '#B05C30', '#F2B422', '#6F9FE3', '#6D6CAD'];
}

function pickColors() {
  leftColor = random(palette);
  rightColor = random(palette);
}

function mouseClicked() {
  if (animating) {
    return;
  }

  const leftHeadX = width / 2 - 100;
  const rightHeadX = width / 2 + 100;
  const headY = height / 2 - 50;

  if (dist(mouseX, mouseY, leftHeadX, headY) < headRadius) {
    selectedHead = 'left';
  } else if (dist(mouseX, mouseY, rightHeadX, headY) < headRadius) {
    selectedHead = 'right';
  } else {
    selectedHead = null;
  }

  redraw();
}

function onButtonPressed() {
  if (!animating) {
    animating = true;
    offsetY = 0;
  }
}
