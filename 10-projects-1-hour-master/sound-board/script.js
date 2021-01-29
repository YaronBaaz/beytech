const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => { /* every element is called sound, we can call it whatever we want*/
    const btn = document.createElement("button");
    btn.classList.add("btn");

    btn.innerText = sound;

    btn.addEventListener("click", () => {
        stopSounds() /*here */
        document.getElementById(sound).play();
    });

    document.body.appendChild(btn);
});

function stopSounds(){
    sounds.forEach((sound) =>{
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime= 0;
    });
}
