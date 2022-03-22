//Create a new project (with only an HTML file) that uses 
//JavaScript to change the color of a Heading element.

const docHeader = document.body.querySelector('h1');
docHeader.style.color = 'orange';


function colorChanger(){
    document.body.style.backgroundColor = "red";
    document.body.querySelector('.headerTitle').style.color = 'black';
}