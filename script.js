var character = document.getElementById("character");
var block = document.getElementById("block");
var isPaused = false;
var pause = document.getElementById("pause");
var resume = document.getElementById("resume");

window.addEventListener('keydown', function(e){
    if(e.key == "z"){
        jump();
    }
    if(e.key == "p"){
        pauseGame();
        isPaused = true;
    }
    if(e.key == "r"){
        isPaused = false;
        startGame();
    }
})

setTimeout(startGame, 1000);

function startGame(){
    block.classList.add("block-animate");
    resume.disabled = true;
    pause.disabled = false; 
}

function pauseGame(){
    block.classList.remove("block-animate")
    pause.disabled = true;
    resume.disabled = false;
}

// makes the character jump
function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
        setTimeout(function(){
            character.classList.remove("animate");
        }, 500);
    }
    
}

// registers collision and resets the game
setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft < 100 && blockLeft > 80 && characterTop>=130){
        alert("You lose.");
        block.classList.remove("block-animate");
        if (!isPaused) {
            setTimeout(startGame, 500);
        }
    }
    if(isPaused){
        pauseGame();
    }
}, 10)


