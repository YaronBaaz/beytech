const counter = document.getElementById("counter");
const clicker = document.getElementById("clicker");
const upgrade1 = document.getElementById("upgrade1");
const upgradeCounter = document.getElementById("upgradeCounter")
let count = 0;
let upgrade1amount = 0;

counter.innerText=count;
upgradeCounter.innerText = upgrade1amount;

clicker.addEventListener("click", () =>{ 
    count = count + 1 + upgrade1amount;
    counter.innerText=count;
});

upgrade1.addEventListener("click", () =>{
    if (count >29*(upgrade1amount+1)){
    
    upgrade1amount++;
    upgradeCounter.innerText = upgrade1amount;
    count = count -30;
    counter.innerText=count;
}
    else {
        alert("not enough")
    }
  
});

function upgrade(whichUpgrade, upgradeNumberAmount, minAmountToBuy, count ){
    if (count > minAmountToBuy-1 ){
        upgradeNumberAmount++; 
        count = count - minAmountToBuy
    }
}