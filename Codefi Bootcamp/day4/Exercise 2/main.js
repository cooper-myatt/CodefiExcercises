//Create a function that returns the number of 
//true values in an array.

//Create an array

//Format message for countTF
function messageOutput(t,f){
    return `${t} True Values in the Array \n${f} False Values in the Array`
}

//count number of true values in array
function countTF(arr){
let trueCount = 0
let falseCount = 0
if (arr.length !== 0){
    arr.forEach(element => {
    element === true ? trueCount++ : falseCount++;
    message = messageOutput(trueCount, falseCount);
});
    return message
}
else{
    return "Please enter a non-empty array";
}

}

//display result
let array = [true, false, false, true, false];
console.log(countTF(array));
array = [];
console.log(countTF(array));