/*Create an application that prints out users information on 
submission of a form and saves the results to local storage */

//Selector
const nameInput = document.querySelector('#pName');
const numberInput = document.querySelector('#pNumber');
const addressInput = document.querySelector('#pAddress');
const submitButton = document.querySelector('#submit');
//Global Variables

/*Functions*/

//Add User information to screen
function addToScreen(x){
    const rList = document.querySelector('#resultsList');
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(x));
    rList.appendChild(li);

}

//Save Info to local storage
function saveInfo(){
    //Has to save info recieved from getInfo function
}

//Get Info from local storage
function loadInfo(){

    //return info //Has to return whatever is in storage in correct format
}

//Function that runs all of the other helper functions
function getInfo(e){
    e.preventDefault()
    iName = nameInput.value;
    iNumber = numberInput.value;
    iAddress = addressInput.value;

    iName = `User Name: ${iName}`;
    iNumber = `Phone Number: ${iNumber}`;
    iAddress = `Address: ${iAddress}`;
    addToScreen(iName);
    addToScreen(iNumber);
    addToScreen(iAddress);
    saveInfo();
}



//Event Listeners

submitButton.addEventListener("click", getInfo);

//Start Functions

loadInfo()//run each time page is refreshed with the correct info