//Create a working JavaScript Clock


//Variables
const myClock = document.querySelector("#dt");

//Get the Date and Time
function getDT(){
    const d = new Date();
    return d.toLocaleString("en-US");

}

//clear Date and Time from screen
function clearDT(){
    if (myClock.hasChildNodes()) {
    myClock.innerHTML ="";
    }
}
//display time to screen and remove the previous time
function addDT(){
    clearDT();
    myClock.appendChild(document.createTextNode(getDT()));
}

//starts clock immediately as soon as the page is opened
addDT();

//runs addTime function every second (1000 milliseconds)
setInterval(addDT,1000);