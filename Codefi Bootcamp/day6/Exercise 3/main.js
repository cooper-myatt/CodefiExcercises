/*Create a function that takes three collections of 
arguments and returns the sum of the product of the 
grouped numbers.*/

function product(arr){
    let total = 0;
//only accepts two variables in each sub array
    for(x=0; x<arr.length; x++){
        total += arr[x][0] * arr[x][1]
    }
    console.log(total)
}

//More flexible solution that can take whatever array you want
function nestedProduct(arr){
    let total = 0;
    for(x=0; x<arr.length; x++){
        let subtotal = 1
        for(y=0; y<arr[x].length; y++){
            subtotal *= arr[x][y];
        }
        total+=subtotal
    }
    console.log(total)
}

console.log("One For Loop:")
product([[1,2],[1,1],[2,3]]);  //9
product([[10,2],[5,0],[2,3]]); //26
product([[1,2],[2,3],[3,4]]); //20
product([[1,2],[0,3],[3,0]]); //2

console.log("\nNested For Loops:")
nestedProduct([[1,2],[1,1],[2,3]]);  //9
nestedProduct([[10,2],[5,0],[2,3]]); //26
nestedProduct([[1,2],[2,3],[3,4]]); //20
nestedProduct([[1,2],[0,3],[3,0]]); //2