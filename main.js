//this is the one you'll write your code in make sure to change the script tag in index.html to use main.js instead of test.js

const RES = {x: 1280, y: 720}
let finishPos = 0

function preload(){
    trackFile = loadStrings('track.txt')
    grassImg = loadImage('CarGameImages/grass.png')
    roadImg = loadImage('CarGameImages/road.png')
    finishImg = loadImage('CarGameImages/finish.png')
    carImg = loadImage('CarGameImages/car.png')
}

function setup(){
    createCanvas(RES.x,RES.y)
    background(255,255,255)
    grassGroup = new Group()
    roadGroup = new Group()
    grassImg.resize(RES.x/12, RES.y/6)
    roadImg.resize(RES.x/12, RES.y/6)
    finishImg.resize(RES.x/12, RES.y/6)
    loadTrack()
    createCar();
    playerControls();
    car.collide(grassGroup, reset())
}

function draw(){
    drawSprites()
}


