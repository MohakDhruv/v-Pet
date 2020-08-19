//Create variables here
var dog,dogImg,happyDog;
var database;
var foodS, foodStock;
function preload(){
  //load images here
  happyDog = loadImage("images/dogImg1.png");
  dogImg = loadImage("images/dogImg.png")
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,330,11,11)
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  
}


function draw() {  
background(46,139,87);
  drawSprites();
fill("red");
  textSize("34");
 text(foodStock,110,110);
  //add styles here
  dog.addImage("dog1", dogImg);
  dog.scale = 1/4;
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
}


function readStock(data) { 

foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    food:x
  })
}