//Closures are functions that remember their lexical environments. Lexical environments mean the environment in which the function was declared.
//**Aim**: Fix the code to print out the string message.

/*javascript
function parent(x) {
  return function closure() {
    // Closure is declared here.
    return x;
  };
}

const remember = parent("remembers me");
// Seems like the variable x would be gone after
// parent is executed, but it's not.

closure();
// Returns "remembers me" because the inner
// function remembers x.
```*/

function parent(x) {
    return function closure() {
      // Closure is declared here.
      return x;
    };
  }
  
  const remember = parent("remembers me");
  // Seems like the variable x would be gone after
  // parent is executed, but it's not.
  
  closure();
  // Returns "remembers me" because the inner
  // function remembers x.