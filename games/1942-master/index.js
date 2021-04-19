// 1. display the hero ^^^
let hero ={
    x: 300,
    y: 500
}
let bullets = [

]
 function displayHero(){
    document.getElementById('hero').style['top'] = hero.x + 'px';
    document.getElementById('hero').style['left'] = hero.y + 'px;'
 }
// 2. make the hero move up and down and left and right ^^^^
 displayHero()

// 3. Display all the enemies and
 let enemies = [
     {x: 50, y:50},
     {x: 250, y:50},
     {x: 450, y:50},
     {x: 550, y:50},
     {x: 400, y:90},
     {x: 200, y:40},
    ]
function displayEnemies(){
    let output = ``;
    for(let x = 0; x<enemies.length; x++){
        output += `<div class='enemy1' style='top:`+enemies[x].y+`px; left:`+ enemies[x].x+`px;'>
            </div>`
    }
    document.getElementById('enemies').innerHTML = output;
}


// 4. Make the enemies move 
function moveEnemies(){
    for(let x = 0; x<enemies.length; x++){
        enemies[x].y +=5;
        if(enemies[x].y>550){
            enemies[x].y = 0;
            console.log(`enemy`, x, `went out of bound`)
        }
    }
}

function moveBullets(){
    for(let x = 0; x<bullets.length; x++){
        bullets[x].y -=5;
        if(bullets[x].y<0){
            bullets[x]= bullets[bullets.length-1];
            bullets.pop();
        }
    }
}
function gameLoop(){
    displayEnemies();
    moveEnemies();
    displayHero();
    moveBullets();
    displayBullets();
}
setInterval(gameLoop)

function detectCollision(){
let output = ``;
for(let x = x< bullets.length; x++;){
    for(let x = 0; x<enemies.length; x++){
        if(Math.abs(bullets[x].x- enemies[x].x)< 5 && Math.abs(
            bullets[x].y - enemies[x].y<5)){
                console.log('bullet'+  x  +'and' + x +'enemy' + 'collided')
            }
    }
}
}

document.onkeydown = function(a){
           if(a.keyCode == 37){
        hero.x -=10;
    } else if(a.keyCode == 39){
        hero.y +=10;
    } else if(a.keyCode ==32){
        bullets.push({x: hero.x + 8, y: hero.y - 15})
        console.log(bullets)
        displayBullets();
    }
    displayHero()
    //console.log(hero);
 }

 function displayBullets(){
    let output = ``
    for(let b =0; b<bullets.length; b++){
        output += `<div class='bullets' style='top:`+bullets[b].y+`px; left:`+ bullets[b].x+`px;'>
            </div>`
    }
    document.getElementById('bullets').innerHTML = output;
 }