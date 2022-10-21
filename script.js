var character = document.getElementById("character");
var block = document.getElementById("block");

window.addEventListener('keydown', function(e){
    if(e.key == " "){
        jump();
    }
})

setTimeout(function(){
    block.classList.add("block-animate");
}, 1000);

function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
        setTimeout(function(){
            character.classList.remove("animate");
        }, 500);
    }
    
}

setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft < 100 && blockLeft > 80 && characterTop>=130){
        alert("You lose.");
        block.classList.remove("block-animate");
        setTimeout(function(){
            block.classList.add("block-animate");
        }, 1000);
    }
}, 10)

