let foodList = [{food : 'Pizza', price : 4.00},
                {food : 'Taco', price : 3.00},
                {food : 'chicken strips', price : 3.50}];

function makeFoodList() {
    let ul = document.getElementById("list");
    
for(let i = 0; i < foodList.length; i++){
   let li = document.createElement("li");
   li.appendChild(document.createTextNode(foodList[i].food + ": $" + foodList[i].price.toFixed(2)));
   ul.appendChild(li);
}
console.log(ul);
}
makeFoodList();