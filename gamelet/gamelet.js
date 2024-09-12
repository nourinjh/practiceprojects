/************************** 
 Gamelet: A starting point for writting games.
 Author: Nourin Abd El Hadi
 Version: 1.0
**************************/

const ball = document.getElementById('ball'); //get the ball
document.addEventListener('keydown', handleKeyPress);
let positionX = 0;
let positionY = 0;

function handleKeyPress(e){
    if(e.code == 'KeyA'){
        positionX = positionX - 20;
    }
    if(e.code == 'KeyD'){
        positionX = positionX + 20;
    }
    if(e.code == 'KeyW'){
        positionY = positionY - 20;
    }
    if(e.code == 'KeyS'){
        positionY = positionY + 20;
    }
    if(positionX < 0){
        positionX = 0;
        positionY = 0;
    }

    refresh(); //update the ball's position
}

function refresh(){ 
    ball.style.left = positionX + 'px';
    ball.style.top = positionY + 'px';
}