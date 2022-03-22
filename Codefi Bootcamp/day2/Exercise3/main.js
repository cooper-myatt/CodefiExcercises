/* Create a function that takes two numbers as 
arguments (num, length) and returns an array of multiples of 
num until the array length reaches length. */

function arrayOfMultiples(x,r){
    const arr = [];
    
    for(let y = 1; y <= r; y++){
        arr.push(x * y);
    }
    return arr
}

console.log(arrayOfMultiples(12, 10));
console.log(arrayOfMultiples(7, 5));
console.log(arrayOfMultiples(17, 6));
console.log(arrayOfMultiples(1,3));