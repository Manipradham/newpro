
var ground,groundImage;
var gameImage;
var apple , appleGroup;
var score;
//var trollyImage,trolly;

function preload(){
    groundImage = loadImage("ground2.png");
    gameImage = loadImage("game.jpg");
    treeImage = loadImage("tree3.jpg");
    //trollyImage = loadImage("trolly.jpg");
}



function setup(){
    canvas = createCanvas(1200,600);
   /* ground = createSprite(1200,180,20,50);
    ground.addImage("ground",groundImage);
    ground.x = ground.width/2;
    ground.velocityX = -4*/
    appleGroup = createGroup();
   // ground.velocityX = -(6 +3*score/100);
   //apple.inputEnabled = true;

}

function draw(){
    background(treeImage);
    text(score,100,500);
    //trolly = createSprite(1150,550,20,20);
    //trolly.addImage(trollyImage);
    spawnAppples();
    drawSprites()
    

}
/*function mousePressed(){
    score = score + 10;
    apple.destroy();
}*/
    


function spawnAppples(){
    if(frameCount % 20 === 0){
        apple = createSprite(400,120,40,10);
       // apple.velocityX = -6;
        apple.y = Math.round(random (200,250));
        apple.x = Math.round(random (100,1000));
        apple.addImage(gameImage);
        apple.scale=0.1
        apple.lifeTime = 50;
        appleGroup.add(apple);
    }
}