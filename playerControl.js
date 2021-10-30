



function playerControls(){
    let lastRotation = car.rotation;

    playerCar = {
        speed: 0,
        speedTop: 5,
        turnSpeed: 5
    }

    if(keyDown(UP_ARROW)){
        playerCar.speed += playerCar.speedTop;
    } 

    
    if(keyDown(DOWN_ARROW)){
        playerCar.speed -= playerCar.speedTop;
    }

    if(keyDown(LEFT_ARROW)){
        car.rotation -= playerCar.turnSpeed;

        // Prevents car from rotating if car is stopped
        if(playerCar.speed == 0){
            car.rotation = lastRotation;
        }
    }

    if(keyDown(RIGHT_ARROW)){
        car.rotation += playerCar.turnSpeed;

        if(playerCar.speed == 0){
            car.rotation = lastRotation;
        }
    }

    if(playerCar.speed == 0){
        car.rotation = lastRotation
    }


    carVelocityX = playerCar.speed * cos(car.rotation);
    carVelocityY = playerCar.speed * sin(car.rotation);
  
    car.setVelocity(carVelocityX, carVelocityY);

}