//Create the function that takes an array with objects and 
//returns the sum of people's budgets.


groupBudget1 = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ];

  groupBudget2 = [
    { name: "John",  age: 21, budget: 29000 },
    { name: "Steve",  age: 32, budget: 32000 },
    { name: "Martin",  age: 16, budget: 1600 }
  ];

  function getBudgets(arr){
      let total = 0
      arr.forEach((item) => total+=item.budget);
      return total
  }

  console.log(getBudgets(groupBudget1))  //Should Return: 65700
  console.log(getBudgets(groupBudget2))  //Should Return: 62600