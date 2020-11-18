/**
/  CSMA 101 
/  Fall 2020
/  Echo Theohar
/  @uthor Natalia Campos
/  natalia.campos@woodbury.edu
*/

var img1, img2, img3, totalSquares, x, y, desiredColor, c, count;


function preload(){

    img1 = loadImage("Data/iron1.jpg");
    img2 = loadImage("Data/iron2.jpg");
    img3 = loadImage("Data/iron3.jpg");
    frameRate(700);
}

function setup(){
    createCanvas(1000,2000);
    background(0);

    //load image pixels
    img1.loadPixels();
    img2.loadPixels();
    img3.loadPixels();

    //initialize values
    totalSquares = 400;
    y = 0;
    c = 1;


}

function draw(){

    //set square size based off total squares
    var squareSize = width/totalSquares;

    //draw square
    var currentSquare = 0;

    //keeps square size proportional to width
    while(currentSquare < totalSquares){
        x = currentSquare * squareSize;


        //get color
        var desiredColor1 = getColor1();
        var desiredColor2 = getColor2();
        var desiredColor3 = getColor3();

        if(c>0 && c<2){
            fill(desiredColor1);
        }

        if(c>1 && c<3){
            fill(desiredColor2);
        }
        if(c>2 && c<4){
            fill(desiredColor3);
        }

        rect(x, y, squareSize, squareSize);
        currentSquare++;
    }
    
    //move down a row
    y = y + squareSize;
    
    //start over at top
    if (y > 2000){ 
    //totalSquares = random(250, 275);
        c++;
        y = 0;
    }
    
    if(c>=4){
        c = 1;
    }
    
}

function getColor1(){
    
    var desiredColor1 = img1.get(floor(x), floor(y));
    return desiredColor1;
}

function getColor2(){
    
    var desiredColor2 = img2.get(floor(x), floor(y));
    return desiredColor2;
}

function getColor3(){
    
    var desiredColor3 = img3.get(floor(x), floor(y));
    return desiredColor3;
}