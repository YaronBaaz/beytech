
function createEmoji() {
    var myArray = ["🚲", "🚴", "✋", "📚", "😄", "❤️" ]; /* only if doing mult emojis*/
    var randomEmoji = myArray[Math.floor(Math.random()*myArray.length)]; /* only if doing mult emojis */

    const emoji = document.createElement("div"); 
    emoji.classList.add("emoji"); 

    emoji.style.left = Math.random() * 100 + "vw";  /*this later*/
    emoji.style.animationDuration = Math.random() * 2 + 3 + "s"; /*this later* from 2 to 5*/

    emoji.innerText = randomEmoji;

    /* for 2 emojis */

   /* if (Math.random() < .501) /*{
        emoji.innerText = "🚴";
    } else{
        emoji.innerText = "🚲";
    } */

    /* for single use*/

    /*emoji.innerText = "emoji";*/ 
     

    document.body.appendChild(emoji);

    setTimeout(() => { /*later*/
        emoji.remove(); 
    }, 5000);
}

setInterval(createEmoji, 200);
