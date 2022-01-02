let arrow;



function setup()  {
    createCanvas(500,500);
    background(150);
    arrow = new Arrow(250,250,0);
    noCursor();
}

function draw()  {
    createCanvas(500,500);
    background(150);
    arrow.drawArrow();


    
}
