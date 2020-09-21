var bullet1,bullet2,bullet3,bullet4,bullet5;
var wall1,wall2,wall3,wall4,wall5,thickness1,thickness2,thickness3,thickness4,thickness5;
var success1,success2,success3,success4,success5;
var color1,color2,color3,color4,color5;
var line1,line2,line3,line4;

function setup(){
    var canvas = createCanvas(1600,400);

    bullet1 = createSprite(50,50,30,5);
    line1 = createSprite(600,175/2,1200,5);
    line1.shapeColor = "black";

    bullet2 = createSprite(50,125,30,5);
    line2 = createSprite(600,325/2,1200,5);
    line2.shapeColor = "black";

    bullet3 = createSprite(50,200,30,5);
    line3 = createSprite(600,475/2,1200,5);
    line3.shapeColor = "black";

    bullet4 = createSprite(50,275,30,5);
    line4 = createSprite(600,625/2,1200,5);
    line4.shapeColor = "black";
    
    bullet5 = createSprite(50,350,30,5);

    thickness1 = random(22,83);
    wall1 = createSprite(1200,bullet1.y,thickness1,50);
    wall1.shapeColor = rgb(80,80,80);

    thickness2 = random(22,83);
    wall2 = createSprite(1200,bullet2.y,thickness2,50);
    wall2.shapeColor = rgb(80,80,80);

    thickness3 = random(22,83);
    wall3 = createSprite(1200,bullet3.y,thickness3,50);
    wall3.shapeColor = rgb(80,80,80);

    thickness4 = random(22,83);
    wall4 = createSprite(1200,bullet4.y,thickness4,50);
    wall4.shapeColor = rgb(80,80,80);

    thickness5 = random(22,83);
    wall5 = createSprite(1200,bullet5.y,thickness5,50);
    wall5.shapeColor = rgb(80,80,80);
}
function draw(){
    background(170);
    textSize(30);

    createBullet1();
    fill("" + color1);
    text(success1,500,50);
    createBullet2();
    fill("" + color2);
    text(success2,500,125);
    createBullet3();
    fill("" + color3);
    text(success3,500,200);
    createBullet4();
    fill("" + color4);
    text(success4,500,275);
    createBullet5();
    fill("" + color5);
    text(success5,500,350);
    
    drawSprites();
}

function createBullet1(){
    var speed = random(223,321);
    var weight = random(30,52);
    var deformation;
    
    if (frameCount === 1){
    bullet1.velocityX = speed;
    }
    if (bullet1.collide(wall1)){

        deformation = (0.5 * weight * speed * speed) / (thickness1 * thickness1 * thickness1);

        if (deformation <= 10){
            wall1.shapeColor = "green";
        success1 = "Effective";
        color1 = "green";
        }
        if (deformation > 10){
            wall1.shapeColor = "red";
            success1 = "Not effective";
            color1 = "red";
        }
    }
}

function createBullet2(){
    var speed = random(223,321);
    var weight = random(30,52);
    var deformation;
    
    if (frameCount === 1){
        bullet2.velocityX = speed;
        }
    if (bullet2.collide(wall2)){

        deformation = (0.5 * weight * speed * speed) / (thickness2 * thickness2 * thickness2);

        if (deformation <= 10){
            wall2.shapeColor = "green";
        success2 = "Effective";
        color2 = "green";
        }
        if (deformation > 10){
            wall2.shapeColor = "red";
            success2 = "Not effective";
            color2 = "red";
        }
    }
}

function createBullet3(){
    var speed = random(223,321);
    var weight = random(30,52);
    var deformation;
    
    if (frameCount === 1){
        bullet3.velocityX = speed;
        }
    if (bullet3.collide(wall3)){

        deformation = (0.5 * weight * speed * speed) / (thickness3 * thickness3 * thickness3);

        if (deformation <= 10){
            wall3.shapeColor = "green";
        success3 = "Effective";
        color3 = "green";
        }
        if (deformation > 10){
            wall3.shapeColor = "red";
            success3 = "Not effective";
            color3 = "red";
        }
    }
}

function createBullet4(){
    var speed = random(223,321);
    var weight = random(30,52);
    var deformation;
    
    if (frameCount === 1){
        bullet4.velocityX = speed;
        }
    if (bullet4.collide(wall4)){

        deformation = (0.5 * weight * speed * speed) / (thickness4 * thickness4 * thickness4);

        if (deformation <= 10){
            wall4.shapeColor = "green";
        success4 = "Effective";
        color4 = "green";
        }
        if (deformation > 10){
            wall4.shapeColor = "red";
            success4 = "Not effective";
            color4 = "red";
        }
    }
}

function createBullet5(){
    var speed = random(223,321);
    var weight = random(30,52);
    var deformation;
    
    if (frameCount === 1){
        bullet5.velocityX = speed;
        }
    if (bullet5.collide(wall5)){

        deformation = (0.5 * weight * speed * speed) / (thickness5 * thickness5 * thickness5);

        if (deformation <= 10){
            wall5.shapeColor = "green";
        success5 = "Effective";
        color5 = "green";
        }
        if (deformation > 10){
            wall5.shapeColor = "red";
            success5 = "Not effective";
            color5 = "red";
        }
    }
}