let im;

let xPos=0;
let dx=0;

function preload(){
  im=loadImage('Frame_order_When_Images_Remain_red.jpg')
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  
}

function draw() {
  background(0);
  image(im,xPos,0)
  dx=10*(mouseX-displayWidth/2)/displayWidth;
  xPos=xPos-dx;
  print(dx);
  image(im,xPos,0)
  
}