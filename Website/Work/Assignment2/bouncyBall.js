/**
/  CSMA 101 
/  Fall 2020
/  Echo Theohar
/  @uthor Natalia Campos
/  natalia.campos@woodbury.edu
*/

//movement of ball
var startX;
var startY;
var directionX;
var directionY;

//paddle variables
var squrR = 250;
var squrL = 250;
var fill1 = 255;
var fill2 = 255;
var fill3 = 255;
var fill4 = 255;
var fill5 = 255;
var fill6 = 255;
var sqr1 = false;
var sqr2 = false;

//

function setup(){
    //initial setup of canvas
    createCanvas(500,500);
    //background(100);
    
    //starting point
    startX = width/2;
    startY = height/2;
    
    //movement
    directionX = 9;
    directionY = -10;
}

function draw(){
    background(100);
    
    //starting point, add movement
    startX = startX + directionX;
    startY = startY + directionY;
    
    //bouncing animation
    if(startX > width){
    directionX = -directionX;
    }
     if(startX < 0){
    directionX = 9;
    }
    if(startY > height){
    directionY = -directionY;
    }
     if(startY < 0){
    directionY = 1;
    }
    
    //draw ball
    fill(random(255), random(255), random(255));
    ellipse(startX, startY, 25);
    
    keyPressed();
    
    //draw moving squares
    //rect(loc,ation,w,h);
    fill(fill1, fill2, fill3);
    rect(0,squrR, 15, 50);
    
    fill(fill4, fill5, fill6);
    rect(490,squrL, 15, 50);
    
    //change rect color when ball hits
    if(startX > 0 && startX < 0 + 15 && startY > mouseY && startY < mouseY + 60 && sqr1 === true){
        fill1 = random(255);
        fill2 = random(255);
        fill3 = random(255);
    }
    if(startX > 490 && startX < 490 + 15 && startY > mouseY && startY < mouseY + 50 && sqr2 === true){
        fill4 = random(255);
        fill5 = random(255);
        fill6 = random(255);
    }
       
}

function keyPressed(){
    if (keyCode === LEFT_ARROW) {
    squrR = map(mouseY,0,height,5,450,true);
    sqr1 = true;
    sqr2 = false;
    } else if (keyCode === RIGHT_ARROW){
    squrL = map(mouseY,0,height,5,450,true);
    sqr2 = true;
    sqr1 = false;
    }

//function checkColor(){
//    if()
//}
}