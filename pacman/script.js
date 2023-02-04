var world = [
// line 1
[2, 2, 2, 2, 2, 2, 2, 2, 2, 2,2, 2, 2, 2, 2, 2, 2, 2, 2, 2,2, 2, 2, 2, 2, 2, 2, 2, 2, 2,2, 2, 2, 2, 2, 2, 2, 2, 2, 2,2, 2, 2, 2, 2, 2, 2, 2, 2, 2,2, 2, 2, 2, 2, 2, 2, 2],
// line 2
[2, 0, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 2, 1, 1, 1, 1, 1, 1, 1,1, 2, 1, 1, 1, 2, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 2],
// line 3
[2, 1, 2, 1, 2, 2, 2, 2, 2, 2,2, 2, 4, 2, 2, 2, 2, 1, 2, 2,2, 1, 2, 1, 2, 2, 2, 1, 2, 2,1, 2, 1, 2, 1, 2, 1, 2, 1, 2,1, 2, 2, 1, 2, 1, 1, 2, 2, 2,2, 2, 2, 1, 2, 2, 1, 2],
// line 4
[2, 1, 2, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 2, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 2, 2,1, 2, 1, 2, 1, 2, 1, 1, 1, 2,1, 1, 2, 1, 1, 1, 2, 2, 0, 0,0, 0, 2, 1, 1, 1, 1, 2],
// line 5
[2, 1, 2, 2, 2, 2, 1, 2, 2, 2,1, 2, 2, 2, 2, 1, 2, 2, 2, 2,1, 2, 1, 2, 2, 2, 2, 1, 2, 2,1, 2, 1, 1, 1, 2, 1, 2, 2, 2,2, 1, 2, 2, 1, 2, 2, 0, 0, 0,0, 0, 2, 1, 2, 2, 1, 2],
// line 6
[2, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 2, 2, 1, 1, 1, 1, 1, 1,1, 2, 1, 1, 1, 1, 1, 1, 2, 2,1, 1, 1, 1, 1, 4, 1, 1, 1, 1,1, 1, 1, 1, 1, 2, 0, 0, 0, 0,0, 0, 2, 1, 2, 2, 1, 2],
// line 7
[2, 1, 2, 2, 1, 1, 2, 2, 2, 2,2, 1, 1, 1, 1, 2, 2, 2, 2, 1,1, 2, 1, 1, 2, 2, 2, 2, 2, 2,1, 2, 1, 2, 1, 2, 1, 2, 2, 1,2, 2, 2, 1, 1, 2, 0, 0, 0, 0,0, 0, 2, 1, 1, 1, 1, 2],
// line 8
[2, 1, 2, 1, 1, 2, 2, 0, 0, 0,2, 2, 1, 1, 2, 2, 0, 0, 2, 2,1, 1, 1, 2, 2, 0, 0, 0, 0, 2,1, 2, 1, 2, 1, 2, 1, 2, 2, 2,2, 2, 2, 2, 1, 2, 0, 0, 0, 0,0, 0, 2, 1, 2, 2, 1, 2],
// line 9
[2, 1, 2, 1, 2, 2, 0, 0, 0, 0,0, 2, 1, 2, 2, 0, 0, 0, 0, 2,2, 1, 2, 2, 0, 0, 0, 0, 0, 2,1, 2, 1, 2, 1, 2, 1, 2, 2, 2,1, 1, 2, 2, 1, 2, 2, 0, 0, 0,0, 0, 2, 1, 2, 2, 1, 2],
// line 10
[2, 1, 2, 1, 2, 0, 0, 0, 0, 0,0, 0, 1, 2, 0, 0, 0, 0, 0, 0,2, 1, 2, 0, 0, 0, 0, 0, 0, 2,1, 2, 1, 2, 1, 2, 1, 2, 2, 1,1, 1, 2, 2, 1, 1, 2, 2, 0, 0,0, 0, 2, 1, 2, 2, 1, 2],
// line 11
[2, 1, 2, 1, 2, 0, 0, 0, 0, 0,0, 0, 1, 2, 0, 0, 0, 0, 0, 0,2, 3, 2, 0, 0, 0, 0, 0, 0, 2,1, 1, 1, 2, 1, 1, 1, 2, 2, 3,2, 1, 2, 2, 1, 1, 1, 2, 2, 2,2, 2, 2, 1, 1, 1, 1, 2],
// line 12
[2, 1, 4, 1, 2, 0, 0, 0, 0, 0,0, 0, 1, 2, 0, 0, 0, 0, 0, 0,2, 1, 2, 0, 0, 0, 0, 0, 0, 2,1, 2, 1, 2, 1, 2, 1, 2, 2, 1,1, 1, 2, 2, 1, 2, 1, 1, 1, 1,1, 2, 2, 1, 2, 2, 1, 2],
// line 13
[2, 1, 2, 1, 2, 2, 0, 0, 0, 0,0, 2, 1, 2, 2, 0, 0, 0, 0, 2,2, 1, 2, 2, 0, 0, 0, 0, 0, 2,1, 2, 1, 2, 1, 2, 1, 2, 2, 1,2, 1, 2, 2, 1, 1, 1, 1, 1, 1,1, 2, 2, 1, 2, 2, 1, 2],
// line 14
[2, 1, 2, 1, 1, 2, 2, 0, 0, 0,2, 2, 1, 1, 2, 2, 0, 0, 2, 2,1, 1, 1, 2, 2, 0, 0, 0, 0, 2,1, 2, 1, 2, 1, 2, 1, 2, 2, 1,4, 1, 2, 2, 1, 1, 2, 2, 2, 2,2, 2, 2, 1, 1, 1, 1, 2],
// line 15
[2, 1, 2, 2, 1, 1, 2, 2, 2, 2,2, 1, 1, 1, 1, 2, 2, 2, 2, 1,1, 2, 1, 1, 2, 2, 2, 2, 2, 2,1, 2, 1, 2, 1, 2, 1, 2, 2, 1,2, 1, 2, 2, 1, 1, 2, 2, 2, 2,2, 2, 2, 1, 2, 2, 1, 2],
// line 16
[2, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 2, 2, 1, 1, 1, 1, 1, 1,2, 2, 2, 1, 1, 1, 1, 1, 1, 1,1, 2, 1, 1, 1, 2, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 2],
    // line 17
[2, 2, 2, 2, 2, 2, 2, 2, 2, 2,2, 2, 2, 2, 2, 2, 2, 2, 2, 2,2, 2, 2, 2, 2, 2, 2, 2, 2, 2,2, 2, 2, 2, 2, 2, 2, 2, 2, 2,2, 2, 2, 2, 2, 2, 2, 2, 2, 2,2, 2, 2, 2, 2, 2, 2, 2],

];

var score = 0;
var direction = "right";
var pacman = {
    x: 1,
    y: 1
};
var blueGhost = {
    x:9,
    y:11
};
var orangeGhost = {
    x:9,
    y:9
};
var redGhost = {
    x:7,
    y:9
};
var pinkGhost = {
    x:7,
    y:11
};
function displayWorld() {
    var output = "";

    for (var i = 0; i < world.length; i++) {
        output += "<div class='row'>";
        for (var j = 0; j < world[i].length; j++) {
            if (world[i][j] == 2)
                output += "<div class='brick'></div>";
            else if (world[i][j] == 1)
                output += "<div class='coin'></div>";
            else if (world[i][j] == 3)
                output += "<div class='cherry'></div>";
            else if (world[i][j] == 4)
                output += "<div class='dot'></div>";
            if (world[i][j] == 0)
                output += "<div class='empty'></div>";
        }
        output += '</div>';
    }
    document.getElementById('world').innerHTML = output;
}

function displayPacman() {
    document.getElementById('pacman').style.left = pacman.x*20 + "px"
    document.getElementById('pacman').style.top = pacman.y*20 + "px"
    document.getElementById("pacman").style.backgroundImage = "url('./assets/"+direction+".gif')";
}
function displayBlueGhost() {
    document.getElementById('blueGhost').style.left = blueGhost.x*20 + "px"
    document.getElementById('blueGhost').style.top = blueGhost.y*20 + "px"
    //     // document.getElementById("pacman").style.backgroundImage = "url('./assets/"+direction+".gif')";
}
function displayOrangeGhost() {
    document.getElementById('orangeGhost').style.left = orangeGhost.x*20 + "px"
    document.getElementById('orangeGhost').style.top = orangeGhost.y*20 + "px"
    //     // document.getElementById("pacman").style.backgroundImage = "url('./assets/"+direction+".gif')";
}
function displayRedGhost() {
    document.getElementById('redGhost').style.left = redGhost.x*20 + "px"
    document.getElementById('redGhost').style.top = redGhost.y*20 + "px"
    //     // document.getElementById("pacman").style.backgroundImage = "url('./assets/"+direction+".gif')";
}
function displayPinkGhost() {
    document.getElementById('pinkGhost').style.left = pinkGhost.x*20 + "px"
    document.getElementById('pinkGhost').style.top = pinkGhost.y*20 + "px"
    //     // document.getElementById("pacman").style.backgroundImage = "url('./assets/"+direction+".gif')";
}

function displayScore(){
    document.getElementById('score').innerHTML = "score:"+" "+ score;
}

displayWorld();
displayPacman();
displayBlueGhost();
displayOrangeGhost();
displayRedGhost();
displayPinkGhost();
displayScore();

document.onkeydown = function (e) {
    if (e.key == "ArrowDown"&& world[pacman.y+1][pacman.x ] != 2){
        pacman.y ++
        direction = 'down';
    }
    else if (e.key == "ArrowUp"&& world[pacman.y-1][pacman.x ] != 2){
        pacman.y --
        direction ='up';
    }
    else if (e.key == "ArrowLeft"&& world[pacman.y][pacman.x - 1] != 2){
        pacman.x --
        direction = 'left';
    }
    else if (e.key == "ArrowRight"&& world[pacman.y][pacman.x + 1] != 2){
        pacman.x ++
        direction = 'right';
    }
    if(world[pacman.y][pacman.x] == 1){
        world[pacman.y][pacman.x] = 0;
        score+=10;
        displayWorld();
        displayScore();
    }
    if(world[pacman.y][pacman.x] == 3){
        world[pacman.y][pacman.x] = 0;
        score+=50;
        displayWorld();
        displayScore();
    }
    displayPacman();
}

// lets ghosts move around randomly
// add different directions for ghost
// make ghosts blue when eating dots for 5 second
// hit ghosts lose a life
// on complete start new level