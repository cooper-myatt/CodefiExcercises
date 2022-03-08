/*You will be given an array of drinks, with each drink 
being an object with two properties: `name` and `price`. 
Create a function with the drinks array as an argument and 
return the drinks objects sorted by price in ascending order.

Assume that the following array of drink objects needs 
to be sorted:*/

drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 },
  ];

  /*Output Example
  sortDrinkByPrice(drinks)    ➞    
  [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
  */

  sorted = drinks.sort((a,b) => a.price - b.price);
  console.log(sorted);