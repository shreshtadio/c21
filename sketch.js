var canvas;
var music;
var box1,box2,box3,box4;
var ball,edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1000,600);

    //create 4 different surfaces
    box1 = createSprite(0,580,360,30);
    box1.shapeColor="blue";
    box2 =createSprite(295,580,200,30);
    box2.shapeColor="yellow";
    box3= createSprite(515,580,200,30);
    box3.shapeColor="pink";
    box4=createSprite(740,580,200,30);
    box4.shapeColor="green";
    //create box sprite and give velocity
    ball=createSprite(random(20,750),100,40,40);
    ball.shapeColor=rgb(255,255,255);
    ball.velocityX=4;
    ball.velocityY=9;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    if (box1.isTouching(ball)&& ball.bounceOff(box1) ){
        box1.shapeColor="blue";   
        music.play();

    }
 if (box2.isTouching(ball)){
    box2.shapeColor="yellow";
    ball.velocityX=0;
    ball.velocityY=0;
    music.stop();
    }
    if (box3.isTouching(ball)&& ball.bounceOff(box3)){
        box3.shapeColor="pink";
    }
    if (box4.isTouching(ball)&& ball.bounceOff(box4)){
        box4.shapeColor="green";
    }
drawSprites ();
    //add condition to check if box touching surface and make it box
}
