// List of features to build with
/*
1) Have t\JS display the world of bricks and couns
2) ace the pacman move up and down
*/

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

function displayWorld(){
    let output = '';
    for(let x = 0; x< world.length; x++){
        output +="\n<div class='row'>";
        for (let z = 0; z< world[x]; z++){
            if(world[x][z]==2)
                output += "\n\t<div class='brick'></div>"
             else if(world[x][z]==1)
                output += "\n\t<div class='coin'></div>"
            if(world[x][z]==0)
                output += "\n\t<div class='empty'></div>"
        }
        output +="\n</div>";
    }
    console.log(output);
    document.getElementById('world').innerHTML = output;
    
}//iterate through world

displayWorld()