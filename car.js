function createCar(){ //creates car as sprite
    car = createSprite(finishPos.x, finishPos.y); // placeholder position
    carImg.resize(0, 26);
    car.addImage(carImg);
    car.rotation = -90;
    car.setCollider("circle", 0, 0, carImg.width/2 - 5);
    car.debug = true;
}

function reset(){ //for when car collides with grass, reset car
    car.position = finishPos; //reset car to finish line
    car.rotation = -90; //face up
    car.setSpeed(0); //stop movement
}

