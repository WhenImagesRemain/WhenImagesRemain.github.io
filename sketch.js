let im;
let aspectRatio;
let xPos=0;
let dx=0;

function preload(){
  im=loadImage('Frame_order_When_Images_Remain_red.jpg')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  aspectRatio=im.width/im.height;
  
}

function draw() {
  background(0);
  image(im,xPos,0)
  dx=10*(mouseX-windowWidth/2)/windowWidth;
  xPos=xPos-dx;
  print(aspectRatio);
  image(im,xPos,0,aspectRatio*windowHeight,windowHeight)
  
}
