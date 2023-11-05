function preload(){

}
function setup(){
canvas=createCanvas(600,600);
canvas.center();
camera=createCapture(VIDEO);
camera.hide()
 
}
function draw(){
    image(camera,0,0,600,600);
    rect(5, 60, 55, 550, 20);
    rect(60, 550,530, 55, 20);
    rect(540, 5, 55, 545, 20);
    rect(10, 5,530, 55, 20);
  
}
