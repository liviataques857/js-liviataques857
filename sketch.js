function setup() {
  createCanvas(600, 600);
   background("#BAD897");
}


function draw() {
  
  stroke ("purple");
  fill ("#875291");
 
  
  // console.log(mouseIsPressed);
  
  if (mouseIsPressed){
    rect(mouseX, mouseY, 20, 35);
  }
}
