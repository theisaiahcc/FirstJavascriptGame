var character = document.getElementById("character");
var block = document.getElementById("block");
var isPaused = false;
var pause = document.getElementById("pause");
var resume = document.getElementById("resume");
var heading = document.querySelector("h1");
var heading2 = document.querySelector("h2");
var count = 0;

window.addEventListener('keydown', function(e){
    if(e.key == "z"){
        jump();
    }
    if(e.key == "s"){
        pauseGame();
    }
    if(e.key == "r"){
        
        startGame();
    }
})

setTimeout(startGame, 1000);

function startGame(){
    heading2.innerText = "Score:" + count;
    isPaused = false;
    block.classList.add("block-animate");
    resume.disabled = true;
    pause.disabled = false;
    heading.innerText = "Click or press 'Z' to jump!";
}

function pauseGame(){
    isPaused = true;
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

// registers collision, keeps count, and resets the game
setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft < 100 && blockLeft > 80 && characterTop>=130){
        heading.innerText = "You died!"
        block.classList.remove("block-animate");
        pauseGame();
    }
}, 10)

// keeps score based on how many seconds survived
setInterval(function(){
    if(!isPaused){
        count++;
        heading2.innerText = "Score:" + count;
    }
    else{
        count = 0;
    }
    
}, 1000)


