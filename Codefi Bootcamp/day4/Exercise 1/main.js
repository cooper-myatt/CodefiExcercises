//Create a button that changes the 
//background and text color randomly when clicked

//Variables
cButton = document.querySelector(".colorButton");

//Functions
function randomColor(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return(`#${randomColor}`)
}

function changeColor() {
    document.body.style.backgroundColor = randomColor();
    cButton.style.color = randomColor();
}

//Listeners
cButton.addEventListener('click', changeColor);