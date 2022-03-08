//Write a function that converts an object into an array, 
//where each element represents a key-value pair in the 
//form of an array.

/* 
Examples:

toArray({ a: 1, b: 2 })    ➞    [["a", 1], ["b", 2]]

toArray({ shrimp: 15, tots: 12 })    ➞    
[["shrimp", 15], ["tots", 12]]

toArray({})    ➞    []
*/
person = { a: 1, b: 2 };


toArray = (obj) => Object.entries(obj);


console.log({ a: 1, b: 2 });
console.log(toArray({ shrimp: 15, tots: 12 }));
console.log(toArray({}));