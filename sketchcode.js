var canvasWidth = 1000;
var canvasHeight = 1000;

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
  input = createFileInput(handleFile);
  input.position(0, 0);
}

function draw() {
  if (img) {
    for (widthIndex = 0l widthIndex < canvasWidth; widthIndex++) {
      for (heightIndex = 0; heightIndex < canvasHeight; heightIndex++) {
        image(img, widthIndex, heightIndex, 1, 1, Math.random() * canvasWidth * 10, Math.random() * canvasHeight * 10, 1, 1);
      }
    }
    drawCount++;

    if (drawCount == 25) {
      noLoop();
      removeElements();
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
