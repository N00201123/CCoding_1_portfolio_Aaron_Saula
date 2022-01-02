let ball;
let ball2;
let angle1;
let angle2;
let speed;
let txt = "Balls have collided";


function setup()  {
    createCanvas(500,500);

   speed = 3;
   angle1 = 25;
   angle2 = 47;

    ball = new Ball(height/2, width/2, 0, 0, 20, 52, 152, 219,"myBall1");
    ball2 = new Ball(height/2, width/2, 0, 0, 20, 230, 126, 34, "myBall2");

    //angleMode(DEGREES)
    ball.vx = speed*cos(angle1 * PI/180);
    ball.vy = speed*sin(angle1 * PI/180);
    ball2.vx = speed*cos(angle2 * PI/180);
    ball2.vy = speed*sin(angle2 * PI/180);


}



function draw()  {
    background(0,255,0);
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
        ball.col = true;
        ball2.col = true;
        text(txt, 10, 70, 100, 120);
      } else {
        ball.col = false;
        ball2.col = false;
        noStroke(10);
      }

      
    
}
//function definition
function calDistance(x1,y1, x2, y2) {
  let dx = x1 - x2;
  let dy = y1 - y2;
  //calDistance = (ball.x, ball2.x, ball.y, ball2.y)
  let dist = Math.sqrt(pow(dx, 2) + pow(dy, 2));
  return dist; 
}






