let ball;
let ball2;
//let ball3;
//let ball4;
let angle1;
let angle2;
//let angle3;
//let angle4;
//let angle5;
let speed;
let txt = "Shape has changed";

function setup()  {
    createCanvas(500,500);

    speed = 3;
    angle1 = 45;
    angle2 = 45;
    //angle3 = 90;
    //angle4 = 75;
    //angle5 = 45;

    ball = new Ball(25, 25, 2, 3, 20, 255, 0, 0);
    ball2 = new Ball(475, 25, 2, 3, 20, 255, 255, 255);


    ball.vx = speed*cos(angle1 * PI/180);
    ball.vy = speed*sin(angle1 * PI/180);
    ball2.vx = speed*cos(angle2 * PI/180);
    ball2.vy = speed*sin(angle2 * PI/180);
    
    
}

function draw()  {
    background(0,150,0);
    ball.drawBall();
    ball.moveBall();
    ball2.drawBall();
    ball2.moveBall();
  
    

    if (ball.x > width - ball.radius || ball.x < ball.radius) {
      ball.vx = -ball.vx;
    }
    if (ball.y > height - ball.radius || ball.y < ball.radius) {
      ball.vy = -ball.vy;
    }

    if (ball2.x > width - ball2.radius || ball2.x < ball2.radius) {
      ball2.vx = -ball2.vx;
    }
    if (ball2.y > height - ball2.radius || ball2.y < ball2.radius) {
      ball2.vy = -ball2.vy;
    }

    

    let result = calDistance(ball.x, ball.y, ball2.x, ball2.y);
    

    if (result< ball.radius + ball2.radius) { 
        ball.removeBall();
        fill(255,192,203);
        rect(height/2, width/2, 40, 40);
        noLoop();
    }

  

    
}

function calDistance(x1,y1, x2, y2) {
  let dx = x1 - x2;
  let dy = y1 - y2;
  //calDistance = (ball.x, ball2.x, ball.y, ball2.y)
  let dist = Math.sqrt(pow(dx, 2) + pow(dy, 2));
  return dist; 
}






