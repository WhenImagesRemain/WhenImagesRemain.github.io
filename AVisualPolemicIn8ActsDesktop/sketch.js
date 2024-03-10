let im;
let aspectRatio;
let xPos=0;
let yPos=0;

let dx=0;
let dy=0;
var ffch='niet'
var orientationX_offset=0;
var orientationY_offset=0;
var rotX, rotY;
var gain =30;
var zoomArray = [0,0,0,0,0,0,0];
var zoomi=0;
var zoomSmooth=0;
var ii=0;
var start=true;

var relativeMouseX;
function preload(){
  im=loadImage('Frame_order_When_Images_Remain_red.jpg')
}

function setup() {
  //frameRate(1)
  createCanvas(windowWidth, windowHeight);
  aspectRatio=im.width/im.height;

}

function draw() {
  background(0);

  if(xPos>0){xPos=0}
  if(xPos<-im.width+width/2){xPos=-im.width+width/2}
  //dx=10*(mouseX-windowWidth/2)/windowWidth;

  relativeMouseX=(mouseX-width/2)/width;
  dx=gain*relativeMouseX;
  dy=gain*(mouseY-height/2)/height;

  if(abs(relativeMouseX)<0.1){dx=0}

  if(abs(relativeMouseX)<0.1){start=false}

  if(start){dx=0};
  xPos=xPos-dx;
  yPos=yPos-dy;
  //print("xPos=" + xPos +"   breedte dinges="+(im.width-width/2))

  image(im,xPos,0,aspectRatio*(windowHeight),windowHeight)
  //fill('magenta');

}
