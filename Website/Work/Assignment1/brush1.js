function setup() {
    createCanvas(500, 500);
    background(200);
    
}

function draw() {
    if (mouseIsPressed) {
       fill(0,200,135); 
        ellipse(mouseY, mouseX, 80);
    }
}