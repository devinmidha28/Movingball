var ball;


function setup(){
    
    b1= firebase.database();
   v1= b1.ref("ball/posisition")
   v1.on("value",readvalue,displayerror)


    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
   b1.ref("ball/posisition").set({
x:ball.x+x,y:ball.y+y
   })
   // ball.x = ball.x + x;
   // ball.y = ball.y + y;
}

function readvalue (data){
    c1=data.val();
    ball.x=c1.x
    ball.y=c1.y
}

function displayerror(){
    console.log ("UH-OH")
}