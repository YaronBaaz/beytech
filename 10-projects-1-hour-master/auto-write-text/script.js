let currentSentence = 0; /* which sentence is picked from array, 0 is first , 1 is second etc*/
let index = 0; 
let reset = 0;

function writeText() {
    console.log()
    var myArray = ["Hey you! I really like you <3", " I really mean it :)", "By: Yaron Baazov"]; 
    var textSelector = myArray[currentSentence]; 

    document.body.innerText = textSelector.slice(0, index); /* instead of body you can write getElementbyId*/ 

    if (reset == 0) {
        
        index++;
        if (index > textSelector.length+2){  /*2 is removable, just makes the text stay on longer*/
            reset++;
            }      
    }

    else if (reset == 1) {
        index--;
        if (index == 0){
            reset--;
            currentSentence++;
            if (currentSentence > myArray.length-1){ 
                currentSentence = 0;
                }           
        }  
    }

    /* this for without the erasing letters*/

    /*if (index > textSelector.length+4){ 
        
       index= 0 ;
        i++; 
        if (i > myArray.length-1){ 
            i = 0;
        }
    }  */
}

setInterval(writeText, 100);
