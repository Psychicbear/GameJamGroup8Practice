//setup grassGroup = new Group()
//setup roadGroup = new Group()
//preload trackFile = loadstrings('track.txt')
//run loadTrack() in setup
function loadTrack(){
    tilesizeX = RES.x/12;
    tilesizeY = RES.y/6;
    x = tilesizeX/2;
    y = tilesizeY/2;
    trackFile.forEach(line => {
        currentLine = splitTokens(line)
        currentLine.forEach(char => {
            switch(char){
                case '0':
                    //Create grass sprite
                    tile = createSprite(x,y,tilesizeX,tilesizeY);
                    tile.addImage('grass', grassImg);
                    tile.addToGroup(grassGroup);
                    break;
                case '1':
                    //Create road sprite
                    tile = createSprite(x,y,tilesizeX,tilesizeY);
                    tile.addImage('road', roadImg);
                    tile.addToGroup(roadGroup);
                    break;
                case '2':
                    //Create finish sprite
                    tile = createSprite(x,y,tilesizeX,tilesizeY);
                    finishPos = createVector(x,y)
                    tile.addImage('road', finishImg);
                    tile.addToGroup(roadGroup);
                    break;                    
            }
            x += tilesizeX
        })
        x = tilesizeX/2
        y += tilesizeY
    })
}