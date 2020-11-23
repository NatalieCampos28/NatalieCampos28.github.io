//starting point
var startX;
    //movement
var directionX = 5;

function setup(){
    //create canvas
    let cnv = createCanvas(1000,100);
    
    //loads sketch for HTML and CSS to read
    cnv.parent('sketch-holder');
    
    startX = width/2;
}


function draw(){
    background(255,235,205);
    
    //adding movement
     startX = startX + directionX;
    
    //restarts movement
    if(startX>width){
        startX = 200;
    }
    
    fill(0);
    textSize(30);
    textFont('Georgia');
    text("A Little Bit About Me!", startX, 435);
    
}