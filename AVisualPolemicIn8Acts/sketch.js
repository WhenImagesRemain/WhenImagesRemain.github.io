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

var zoomArray = [0,0,0,0,0,0,0];
var zoomi=0;
var zoomSmooth=0;
var ii=0;
function preload(){
  im=loadImage('Frame_order_When_Images_Remain_red.jpg')
}

function setup() {
  //frameRate(1)
  createCanvas(windowWidth, windowHeight);
  aspectRatio=im.width/im.height;
  btn = createButton("On mobile? Press for orientation permission!");
  btn.position(10,windowHeight-30);
  btn.mousePressed(function(){
      DeviceOrientationEvent.requestPermission();
      ffch='wel';
      orientationX_offset=round(rotationX);
      orientationY_offset=round(rotationY);
  });
  
}

function draw() {
  background(0);
  
  //dx=10*(mouseX-windowWidth/2)/windowWidth;
  dx=20*rotationY;
  dy=1*rotationX;

  xPos=xPos-dx;
  yPos=yPos-dy;
  
  image(im,xPos,0,aspectRatio*(windowHeight-40),windowHeight-40)
  //fill('magenta');
  
  //ellipse(width / 2, height / 2, 30);
  fill(0,0,255)
  
  zoomArray[6]=zoomArray[5];
  zoomArray[5]=zoomArray[4];
  zoomArray[4]=zoomArray[3];
  zoomArray[3]=zoomArray[2];
  zoomArray[2]=zoomArray[1];
  zoomArray[1]=zoomArray[0];
  zoomArray[0]=accelerationZ;
  zoomSmooth=0;
  for(var i = 0; i<zoomArray.length; i++){
    zoomSmooth=zoomSmooth+zoomArray[i];
  }
  zoomSmooth=zoomSmooth/zoomArray.length;
  
  print(zoomSmooth)
  ellipse(width / 2, height / 2, 10*zoomSmooth);
  
}