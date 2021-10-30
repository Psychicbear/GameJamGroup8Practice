//test.js is a file to test all the packages are behaving
let soundTest
let spriteTest

function preload(){
    soundFormats('mp3','ogg')
    soundTest=loadSound("sounds/somewhereiwentwrong-josh-penn-pierson.mp3")
    soundTest.setVolume(0.1) //adjusts the volume up or down of a specific sound
}

function setup(){
    createCanvas(400,400)
    background("grey")
    text("Click to play/stop the sound file!",10,height-20)
    text("Music used for test by: Josh Penn-Piersen",10,height-5)
    spriteTest=createSprite(width/2,height/2,50,50)
}

function draw(){
    drawSprites()
}

function mousePressed(){
    if(soundTest.isPlaying()) {
        soundTest.stop()
    } else {
        soundTest.play()
    }
}