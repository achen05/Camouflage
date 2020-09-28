var canvasWidth = 500;
var canvasHeight = 500;

var widthIndex;
var heightIndex;

var drawCount = 0;

var randomDestination = Math.random();

let input;
let img;

function preload() {

}

function setup() {
  let c = createCanvas(canvasWidth, canvasHeight);
  c.elt.style.border = '1px solid black';
  c.center('horizontal');
  inputButton = createFileInput(handleFile);
  inputButton.elt.style.border = '1px solid black';
  inputButton.center('horizontal');
  inputButton.position(c.position(), 800);
}

function draw() {
  if (img) {
    for (widthIndex = 0; widthIndex < canvasWidth; widthIndex ++) {
      for (heightIndex = 0; heightIndex < canvasHeight; heightIndex += 25) {
        image(img, widthIndex, heightIndex, 1, 25, Math.random() * canvasWidth * 10, Math.random() * canvasHeight * 10, 8, 8);
      }
    }
    drawCount++;

    if (drawCount == 50) {
      noLoop();
      inputButton.remove();
      saveCanvas('myStatic', 'png')
    }
  }

}

function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
  } else {
    img = null;
  }
}

function windowResized() {
  c.center();
  inputButton.position(c.position(), 800);
}
