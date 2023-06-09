const allButtons = document.querySelectorAll(".sound-button");

allButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const soundNumber = button.getAttribute("keyboard");
        playSound(soundNumber);
    });
});

function playSound(soundNumber){
    allSounds[soundNumber].soundLink.play();
}

const allSounds = [
    {
        soundLink: new Audio("")
    }
]