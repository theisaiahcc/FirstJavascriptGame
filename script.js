var character = document.getElementById("character");
var block = document.getElementById("block");

window.addEventListener('keydown', function(e){
    if(e.key == " "){
        jump();
    }
})

// delays start of the game
// setTimeout(function(){
//     block.classList.add("block-animate");
// }, 1000);

setTimeout(startGame, 1000);

function startGame(){
    block.classList.add("block-animate");
}

function pauseGame(){
    block.classList.remove("block-animate")
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
        setTimeout(startGame, 1000);
    }
}, 10)


