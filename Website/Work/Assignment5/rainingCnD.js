/**
/  CSMA 101 
/  Fall 2020
/  Echo Theohar
/  @uthor Natalia Campos
/  natalia.campos@woodbury.edu
*/

var fallRain1 = [];
var fallRain2 = [];
var img1, img2, img3, img4;
var size = 30;

function preload(){

    img1 = loadImage("Data/cat.png");
    img2 = loadImage("Data/pug.png");
    img3 = loadImage("Data/cloud.png");
    img4 = loadImage("Data/thunder.jpeg");


}

function setup(){
    createCanvas(1000, 1000);
    
    for(var i = 0; i<size; i++){
        fallRain1[i]= new Rain(random(width), random(height),80, random(4, 8), random(4,8));
    }
    
    for(var i = 0; i<size; i++){
        fallRain2[i]= new Rain(random(width), random(height), 80, random(1, 3), random(3,6));
    }
    
    //load image pixels
    //img1.loadPixels();
    //img2.loadPixels();
}

function draw(){
    background(img4);
    
    for(var i = 0; i<size; i++){
        fallRain1[i].drawRain1();
        fallRain1[i].fall();
        fallRain1[i].resetRain();
         fallRain2[i].drawRain2();
        fallRain2[i].fall();
        fallRain2[i].resetRain();
    }
    
    image(img3,0, 0, 1000);
}
function Rain(rainX, rainY, rainSize, speedX, speedY){
    
    //The "this" keyword is used to declare local variables within THIS object, and the parameters are passed onto them
    this.x = rainX;
    this.y = rainY;
    this.sz = rainSize;
    this.spX = speedX;
    this.spY = speedY;
    
    //the methods (nested functions) of the Bubble Object
    
    this.drawRain1 = function(){
        image(img1,this.x, this.y, this.sz);
    }
    
    this.drawRain2 = function(){
        image(img2,this.x, this.y, this.sz);
    }
    
    this.fall = function(){
        this.y += this.spY;
    }
    
    this.resetRain = function(){
        if(this.y>height){
            this.y = 0;
        }
    }
    
}