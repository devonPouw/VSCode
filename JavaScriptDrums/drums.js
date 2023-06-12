function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  window.addEventListener("load", function () {
    console.log("page is fully loaded");
    console.log(document.cookie);
    naam = getCookie('username');
    console.log(naam);
    if (naam != "") {
        document.getElementById('name').innerHTML = naam;
    } else {
        document.getElementById('name').innerHTML = "...";
    }
})

function formFunction() {
    let username = document.getElementById('username').value;
    document.cookie = `username = ${username}`;
}

document.cookie = `nogeencookie = lekker`;

function getCookie(key) {
    console.log("in get cookie")
    let name = key + "="; //username=
    let ca = document.cookie.split(';'); // split de cookies in een array
    for(let x = 0; x < ca.length; x++) {  // loop door de array met cookies
        let c = ca[x]; // haal de cookie die aan de beurt is bv: (spatie)username=Kees 
        console.log(c); // (spatie)username=Kees
        while (c.charAt(0) == ' ') { // haal spaties weg
            c= c.substring(1); 
            console.log(c); // username=Kees
        }
        if (c.indexOf(name) == 0) {
            console.log(c.substring(name.length, c.length)); // Kees
            return c.substring(name.length, c.length); // name.length is username= (9 tekens)
        }
    }
    return "";
}
const allButtons = document.querySelectorAll(".sound-button");

allButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const soundNumber = button.getAttribute("keyboard-key");
        playSound(soundNumber);
    });
});

function playSound(soundNumber){
    allSounds[soundNumber].soundLink.play();
}

const allSounds = [
    {
        soundLink: new Audio(soundNumber + "audio/airporn.mp3")
    },  
    {
        soundLink: new Audio(soundNumber+"audio/allahuakbar.mp3")
    },
    {
        soundLink: new Audio(soundNumber+"audio/chewbacca.mp3")
    },
    {
        soundLink: new Audio(soundNumber+"audio/damnsonwow.mp3")
    },
    {
        soundLink: new Audio(soundNumber+"audio/darudedankstorm.mp3")
    },
    {
        soundLink: new Audio(soundNumber+"audio/hog-rider.mp3")
    },
    {
        soundLink: new Audio(soundNumber+"audio/ohbabyatriple.mp3")
    },
    {
        soundLink: new Audio(soundNumber+"audio/ronaldoscream.mp3")
    },
    {
        soundLink: new Audio(soundNumber+"audio/sus.mp3")
    },
]