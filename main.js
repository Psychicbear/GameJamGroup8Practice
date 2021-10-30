//this is the one you'll write your code in make sure to change the script tag in index.html to use main.js instead of test.js

function preload(){
    carImg = loadImage('CarGameImages/car.png');
    finishImg = loadImage('CarGameImages/finish.png');
    grassImg = loadImage('CarGameImages/grass.png');
    roadImg = loadImage('CarGameImages/road.png');
}

function setup(){
    createCar();

}

function draw(){
    drawSprites();
}

