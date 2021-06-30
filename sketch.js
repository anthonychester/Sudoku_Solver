/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Put setup code here
}

function tocolor(num) {
  switch(num) {
    case 1:
    return '#e6194B';
    case 2:
    return '#f58231';
    case 3:
    return '#ffe119';
    case 4:
    return '#bfef45';
    case 5:
    return '#3cb44b';
    case 6:
    return '#42d4f4';
    case 7:
    return '#4363d8';
    case 8:
    return '#911eb4';
    case 9:
    return '#f032e6';
    case 0:
    return '#a9a9a9';
    default:
      return "#000000";
  }
}

function draw() {
  // Put drawings here
  fill(234, 31, 81);
  noStroke();
  rect(50, 50, 250, 250);
  fill(255);
  textStyle(BOLD);
  textSize(140);
  text("p5*", 60, 250);
}

// This Redraws the Canvas when resized
windowResized = function() {
  resizeCanvas(windowWidth, windowHeight);
};
