//variables for bottom lane right
var carBottom_right1 = - 20
var carBottom_right2 = - 160
var carBottom_right3 = - 300

//variables for bottom lane left
var carBottom_left1 = 420
var carBottom_left2 = 560
var carBottom_left3 = 700


//variables for top lane right
var carTop_right1 = - 20
var carTop_right2 = - 160
var carTop_right3 = - 300


//variables for top lane left
var carTop_left1 = 420
var carTop_left2 = 560
var carTop_left3 = 700


//variables for gofer
var beaver = -100

//frog 
var frogY = 530
var frogX = 200

//Lives
var noLives = 3

//Score
var score = 0

function enviroment(){
 
  
  //pathway
  stroke(140, 122, 87, 90)
  strokeWeight(4)
  fill(184, 160, 112)
  rect(0, 322, 400, 30)
  
  //stones
  stroke(110)
  strokeWeight(1)
  fill(180)
  ellipse(205, 100, 20)
  ellipse(190, 150, 10)
  ellipse(190, 150, 5)
  ellipse(200, 130, 7)
  ellipse(190, 150, 12)
  ellipse(210, 170, 15, 10)
  ellipse(210, 140, 9, 13)
  ellipse(185, 113, 6, 13)
  
  //Bottom Road
  fill(0, 30)
  noStroke()
  rect(-10, 375, 420, 110)
  fill(135)
  stroke(250)
  strokeWeight(4)
  rect(-10, 380, 420, 100)
  fill(227, 224, 68)
  noStroke()
  rect(-20, 425, 50, 5)
  rect(70, 425, 50, 5)
  rect(170, 425, 50, 5)
  rect(270, 425, 50, 5)
  rect(370, 425, 50, 5)
  
  //Top Road
  fill(0, 30)
  noStroke()
  rect(-10, 190, 420, 110)
  fill(135)
  stroke(250)
  strokeWeight(4)
  rect(-10, 195, 420, 100)
  fill(227, 224, 68)
  noStroke()
  rect(-20, 240, 50, 5)
  rect(70, 240, 50, 5)
  rect(170, 240, 50, 5)
  rect(270, 240, 50, 5)
  rect(370, 240, 50, 5)
  
  //Pond
  stroke(2, 20)
  fill(135, 208, 224)
  ellipse(200, 0, 500, 150)
  fill(71, 128, 73)
  arc(320, 30, 30, 30, 0, PI+HALF_PI);
}



  // function for car 1
  function car1(){
  fill(255)
  rect(carBottom_right1 + 30, 444, 20, 22)
  fill(191, 71, 57)
  rect(carBottom_right1, 443, 40, 25)
  fill(200)
  ellipse(carBottom_right1 + 8, 450, 8)
  fill(160)
  ellipse(carBottom_right1 + 8, 450, 4)
}
  


  //function for car 2
  function car2(){
  fill(240, 184, 31)
  rect(carBottom_right2, 443, 40, 25)
  fill(255)
  ellipse(carBottom_right2 + 33, 450, 6)
  ellipse(carBottom_right2 + 33, 462, 6)
  rect(carBottom_right2 + 5, 450, 20, 10)
}



  //function for car 3
  function car3(){
  fill(68, 116, 189)
  rect(carBottom_right3, 443, 40, 25)
  fill(80, 150, 210)
  rect(carBottom_right3, 443, 20, 25)
  fill(255)
  rect(carBottom_right3 + 22, 450, 17, 10)
}



  //function for car 4
  function car4(){
  fill(178, 59, 191)
  rect(carBottom_left1, 390, 40, 25)
  fill(109, 144, 199)
  rect(carBottom_left1 + 8, 395, 30, 15)
  fill(110, 90, 53)
  rect(carBottom_left1 + 10, 399, 26, 7)
  }



  //function for car 5
  function car5(){
  fill(28, 217, 34)
  rect(carBottom_left2, 390, 40, 25)
  fill(200)
  rect(carBottom_left2 + 13, 393, 20, 19)
  }



  //function for car 6
  function car6(){
  fill(250, 238, 20)
  rect(carBottom_left3, 390, 40, 25)
  fill(255)
  rect(carBottom_left3 + 20, 392, 10, 20)
  fill(0)
  rect(carBottom_left3 + 24, 396, 2, 12)
  fill(252, 176, 33)
  ellipse(carBottom_left3 + 6, 396, 6)
  ellipse(carBottom_left3 + 6, 408, 6)
  strokeWeight(0)
  fill(255, 249, 66, 20)
  rect(carBottom_left3 - 20, 405, 20, 8)
  rect(carBottom_left3 - 20, 392, 20, 8)
  strokeWeight(2)
  }



  //function for car 7
  function car7(){
  fill(157, 0, 255)
  rect(carTop_right1, 257, 40, 25)
  fill(255)
  rect(carTop_right1, 257, 25, 25)
  }
  



  //function for car 8
  function car8(){
  fill(150, 255, 250)
  rect(carTop_right2, 257, 40, 25)
  fill(191, 154, 84)
  rect(carTop_right2 + 5, 260, 23, 18)
  fill(255)
  ellipse(carTop_right2 + 38, 264, 8)
  ellipse(carTop_right2 + 38, 275, 8)
  }



  //function for car 9
  function car9(){
  fill(206, 159, 237)
  rect(carTop_right3, 257, 40, 25)
  fill(165, 128, 189)
  rect(carTop_right3 + 10, 260, 17, 18)
  }


 
  //function for car 10
  function car10 (){
  fill(255)
  rect(carTop_left1, 205, 40, 25)
  fill(0)
  rect(carTop_left1 + 4, 214, 15, 6, 50)
  rect(carTop_left1 + 24, 208, 13, 20, 3)
  strokeWeight(0)
  fill(255, 0, 0, 50)
  rect(carTop_left1 + 40, 207, 20, 7)
  rect(carTop_left1 + 40, 220, 20, 7)
  strokeWeight(2)
  }



  //function for car 11
  function car11(){
  fill(0, 12, 173)
  rect(carTop_left2, 205, 40, 25)
  fill(252, 252, 114)
  ellipse(carTop_left2 + 7, 211, 8)
  ellipse(carTop_left2 + 7, 223, 8)
  fill(164, 229, 245, 180)
  rect(carTop_left2 + 17, 207, 20, 20)
  }



  //function for car 12
  function car12(){
  fill(64, 64, 64)
  rect(carTop_left3, 205, 40, 25)
  fill(180)
  rect(carTop_left3 + 15, 205, 25, 25)
  }



  //function for beaver
  function beaver1(){
  fill(255)
  rect(beaver+13, 332, 5, 4)
  rect(beaver+13, 337, 5, 4)
  fill(173, 125, 29)
  ellipse(beaver, 337, 30, 20)
  fill(97, 69, 14)
  ellipse(beaver - 20, 337, 20, 10)
  }



  //function for frog
  function frog(){
  stroke(29, 74, 37)
  strokeWeight(2)
  fill(36, 105, 49)
  ellipse(frogX, frogY, 20, 30)
  }



  //function for lives (visual)
  function lives(x, y){
  ellipse(x, y, 20, 30)
  }



  //function for lives (Text)
  function livesText(){
  textSize(20)
  textStyle(BOLD)
  noStroke()
  text('Lives', 10, 540)
  stroke(29, 74, 37)
  strokeWeight(2)
  }



function setup() {
  createCanvas(400, 600);
}



function draw() {
  background(108, 173, 88);
  
  
 //draws all of the background
  enviroment()
  
  
 //Cars in bottom lane animation going right
 carBottom_right1++
 if(carBottom_right1>400)
  {
    carBottom_right1 = -40
  }

   carBottom_right2++
 if(carBottom_right2>400)
  {
    carBottom_right2 = -40
  }
  
 carBottom_right3++
 if(carBottom_right3>400)
  {
    carBottom_right3 = -40
  }
  //Cars in bottom Lane going right
  car1 ()
  car2 ()
  car3 ()
  
  
  
  //Cars in bottom lane animation going left
 carBottom_left1--
 if(carBottom_left1< -50)
  {
    carBottom_left1 = 400
  }
 
   carBottom_left2--
   if(carBottom_left2< -50)
  {
    carBottom_left2 = 400
  }
 
   carBottom_left3--
   if(carBottom_left3< -50)
  {
    carBottom_left3 = 400
  }
  //Cars in bottom Lane going left
  car4()
  car5()
  car6()
  
  
  
  //Cars in Top lane animation going right
  carTop_right1 = carTop_right1+1.8
  carTop_right2 = carTop_right2+1.8
  carTop_right3 = carTop_right3+1.8

 if(carTop_right1>400)
  {
    carTop_right1 = -40
  }
  
   if(carTop_right2>400)
  {
    carTop_right2 = -40
  }
  
  if(carTop_right3>400)
  {
    carTop_right3 = -40
  }
  //Cars in Top Lane going right
  car7()
  car8()
  car9()
  
  
  
  //Cars in Top lane animation going left
  carTop_left1 = carTop_left1-1.8
  carTop_left2 = carTop_left2-1.8
  carTop_left3 = carTop_left3-1.8
  
  if(carTop_left1< -50)
  {
    carTop_left1 = 400
  } 
  
     if(carTop_left2< -50)
  {
    carTop_left2 = 400
  } 
  
    if(carTop_left3< -50)
  {
    carTop_left3 = 400
  } 
  //Cars in top Lane going left
  car10()
  car11()
  car12()

  
  
  //beaver animation
    beaver = beaver+0.4
  if(beaver>500){
    beaver = -100
  }
  //beaver
  beaver1()

  
  //Frog
  frog()
  if (keyIsDown(LEFT_ARROW)) {
    frogX -= 1.3;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    frogX += 1.3;
  }

  if (keyIsDown(UP_ARROW)) {
    frogY -= 1.3;
  }

  if (keyIsDown(DOWN_ARROW)) {
    frogY += 1.3;
  }
  
  if(frogX>385){
    frogX=385
  }
  if(frogX<15){
    frogX=15
  }
  if(frogY<20){
    frogY=20
  }
  if(frogY>580){
    frogY=580
  }
  
  //lives
  livesText()
  if(noLives==1){
  lives(20, 570)
  }
  
  if(noLives==2){
  lives(20, 570)
  lives(60, 570)
  }
  
  if(noLives==3){
  lives(20, 570)
  lives(60, 570)
  lives(100, 570)
  }

  
  //Score
  textSize(15)
  noStroke()
  text('Score', 350, 570)
  text(''+score, 366, 590)
  if(frogY<40){
    score = score+1
    frogX = 200; 
    frogY = 550
  }
  
  
//collision for all the cars
  function collisionCheck (other_x, other_y, other_width, other_height){    
  return (frogX- 10< other_x + other_width) && (frogY - 15 < other_y + other_height) && (frogX + 10 > other_x) && (frogY + 15 > other_y);  
}
  if (collisionCheck(carBottom_right1, 444, 40, 25)){
     noLives = noLives - 1;//lost a life
     frogX = 200; //change these values as appropraite to place frog back
     frogY = 550;
 }
  if (collisionCheck(carBottom_right2, 444, 40, 25)){
     noLives = noLives - 1;//lost a life
     frogX = 200; //change these values as appropraite to place frog back
     frogY = 550;
 }
  if (collisionCheck(carBottom_right3, 444, 40, 25)){
     noLives = noLives - 1;//lost a life
     frogX = 200; //change these values as appropraite to place frog back
     frogY = 550;
 }
  if (collisionCheck(carBottom_left1, 390, 40, 25)){
     noLives = noLives - 1;//lost a life
     frogX = 200; //change these values as appropraite to place frog back
     frogY = 550;
 }
   if (collisionCheck(carBottom_left2, 390, 40, 25)){
     noLives = noLives - 1;//lost a life
     frogX = 200; //change these values as appropraite to place frog back
     frogY = 550;
 }
   if (collisionCheck(carBottom_left3, 390, 40, 25)){
     noLives = noLives - 1;//lost a life
     frogX = 200; //change these values as appropraite to place frog back
     frogY = 550;
 }
  if (collisionCheck(carTop_right1, 257, 40, 25)){
     noLives = noLives - 1;//lost a life
     frogX = 200; //change these values as appropraite to place frog back
     frogY = 550;
 }
  if (collisionCheck(carTop_right2, 257, 40, 25)){
     noLives = noLives - 1;//lost a life
     frogX = 200; //change these values as appropraite to place frog back
     frogY = 550;
 }
  if (collisionCheck(carTop_right3, 257, 40, 25)){
     noLives = noLives - 1;//lost a life
     frogX = 200; //change these values as appropraite to place frog back
     frogY = 550;
 }
  if (collisionCheck(carTop_left1, 205, 40, 25)){
     noLives = noLives - 1;//lost a life
     frogX = 200; //change these values as appropraite to place frog back
     frogY = 550;
}
  if (collisionCheck(carTop_left2, 205, 40, 25)){
     noLives = noLives - 1;//lost a life
     frogX = 200; //change these values as appropraite to place frog back
     frogY = 550;
}
  if (collisionCheck(carTop_left3, 205, 40, 25)){
     noLives = noLives - 1;//lost a life
     frogX = 200; //change these values as appropraite to place frog back
     frogY = 550;
}
  if (collisionCheck(beaver - 15, 328, 30, 20)){
     noLives = noLives - 1;//lost a life
     frogX = 200; //change these values as appropraite to place frog back
     frogY = 550;
}
  
  
  //Game Over Screen
  if (noLives == 0){
    fill(255,0,0)
    rect(0,0, 400, 600)
    textSize(50)
    fill(0)
    text("GAME OVER",200,250)
    textSize(30)
    text("YOUR SCORE " + score, 200, 290)
    textSize(20)
    text("Run The Program Again To Restart",200, 575)
  }
  
  //Instruction button and page
  if(noLives>=1){
  fill(108, 173, 88)
  strokeWeight(2)
  stroke(0, 100)
  rect(10,10,100, 30)
  fill(0)
  noStroke()
  text("Instructions",19,35)
  textSize(10)
  text("HOLD BUTTON FOR", 12, 22)
  

  if (mouseIsPressed){
    if(mouseX<100 && mouseX>0 && mouseY<40 && mouseY>10){
      fill(108, 173, 88)
      stroke(0,80)
      strokeWeight(10)
      rect(50,100, 300,400, 10)
      fill(51, 145, 63)
      textSize(50)
      stroke(0,100)
      strokeWeight(5)
      text("FROGGER",70,170)
      textSize(15)
      noStroke()
      fill(0)
      text("1.Doge all the obsticles",120, 220)
      text("2.Use Arrow Keys To Move", 110, 250)
      text("3.Make it into the pond to gain a point",70, 280)
      textSize(11)
      text("If you make it to the pond you will be teleported",70, 350)
      text("back to the start and can go again to gain more points",60, 360)
      text("you have 3 Lives, if you lose them all its GAME OVER!",60, 400)
    }
  }
  }
}