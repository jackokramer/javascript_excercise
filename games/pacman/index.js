// List of features to build with
/*
1) Have t\JS display the world of bricks and couns
2) ace the pacman move up and down
*/
window.addEventListener('load', displayWorld, false);

let world  = [
    [2,2,2,2,2,2,2,2,2,2],
    [2,1,1,1,1,1,1,1,1,2],  
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2],
]

let pacman = {
    x: 40,
    y: 40
}

function displayWorld(){
    let output = '';
    for(let x = 0; x< world.length; x++){
        output +="\n<div class='row'>\row";
        for (let z = 0; z< world[x]; z++){
            if(world[x][z]==2)
                output += "<div class='brick'></div>"
             else if(world[x][z]==1)
                output += "<div class='coin'></div>"
            if(world[x][z]==0)
                output += "<div class='empty'></div>"
        }
        output +="\n</div>";
    }
    //console.log(output);
    document.getElementById('world').innerHTML = output;
    
}//iterate through world

function displayPacman(){
    document.getElementById('pacman').style.top =pacman.y+"px";
    document.getElementById('pacman').style.left =pacman.x+"px";
}

displayWorld();

document.onkeydown = function(e){
    if(e.keyCode == 37){
        pacman.x--;
    }
    else if(e.keyCode==39){
        pacman.x++;
    }
    else if(e.keyCode==38){
        pacman.y -=20;
    }
    else if(e.keyCode = 40){
        pacman.y +=20;
    }
    if(world[pacman.y][pacman.x] ==1){
        world[pacman.y][pacman.x] = 0;
        displayWorld();
    }
    //console.log(e.keyCode);
    displayWorld();
}

// pac world