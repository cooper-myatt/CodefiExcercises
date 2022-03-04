/*Write a function that returns an array containing 
all the numbers inclusive to that range given the 
start and end values.*/

function countToEnd(start,end){
    let arr = []

    if (start > end){
        for(x=start; x>=end; x--){
            arr.push(x);
        }
        return arr;
    }
    else if (start < end){
        for(x=start; x<=end; x++){
            arr.push(x);
        }
        return arr;
    }
    else if (start === end){
        arr.push(start);
        return arr;
    }
    else{
        console.log("ERROR")
    }
}

console.log(countToEnd(1,10))
console.log(countToEnd(6,1))
console.log(countToEnd(1,1))
