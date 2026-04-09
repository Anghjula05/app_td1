let palette;
let selectedHead = null;
let animating = false;
let slideOffset = 0;
let leftColor;
let rightColor;
const headRadius = 35;
const headDiameter = 70;

function setup() {
  createCanvas(800, 800);

  generatePalette();
  pickColors();
}

function drawLabel() {
  fill(0, 0, 0);
  textAlign(CENTER);
  textSize(15);
  text("Cliquez sur une tête", 400, 220);
}

function draw() {
  background(220);
  noStroke();
  drawLabel();

  const leftHeadX = width / 2 - 100;
  const rightHeadX = width / 2 + 100;
  const baseHeadY = height / 2 - 50;
  const baseTorsoY = height / 2 + 45;
  let leftHeadY = baseHeadY;
  let leftTorsoY = baseTorsoY;
  let rightHeadY = baseHeadY;
  let rightTorsoY = baseTorsoY;

  if (animating) {
    if (selectedHead === 'left') {
      leftHeadY += slideOffset;
      leftTorsoY += slideOffset;
    } else if (selectedHead === 'right') {
      rightHeadY += slideOffset;
      rightTorsoY += slideOffset;
    }

    slideOffset += 10;
    if (slideOffset > height + 100) {
      animating = false;
      slideOffset = 0;
      if (selectedHead === 'left') {
        leftColor = random(palette);
      } else if (selectedHead === 'right') {
        rightColor = random(palette);
      }
      selectedHead = null;
    }
  }

  fill(leftColor);
  ellipse(leftHeadX, leftTorsoY, 80, 120);
  fill(leftColor);
  circle(leftHeadX, leftHeadY, headDiameter);

  fill(rightColor);
  ellipse(rightHeadX, rightTorsoY, 80, 120);
  fill(rightColor);
  circle(rightHeadX, rightHeadY, headDiameter);

  if (selectedHead === 'left') {
    fill('red');
    circle(leftHeadX, leftHeadY - 15, 10);
  } else if (selectedHead === 'right') {
    fill('red');
    circle(rightHeadX, rightHeadY - 15, 10);
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
    animating = true;
    slideOffset = 0;
  } else if (dist(mouseX, mouseY, rightHeadX, headY) < headRadius) {
    selectedHead = 'right';
    animating = true;
    slideOffset = 0;
  }
}
