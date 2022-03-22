/*Create a new project (with an HTML and JavaScript) 
that uses JavaScript to change the color of a Heading element 
on a button click.*/

const headerMain = document.getElementsByTagName("h1");
const colorButton = document.getElementsByClassName("cb")[0];


function changeColor(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    headerMain[0].style.color = `#${randomColor}`;
}

colorButton.addEventListener("click", changeColor);