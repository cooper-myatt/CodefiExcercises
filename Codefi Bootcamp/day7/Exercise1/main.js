//Write a function `redundantReturn` that takes in a string `str` and returns a function that returns str.

function redundantReturn(){
    return (str) => str;
}

returnString = redundantReturn();

console.log(returnString("Hello World"));