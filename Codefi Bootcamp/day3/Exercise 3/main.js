//Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically and their corresponding values in the same order.

let keys = []
let values = []

function keysAndValues(kv){
    sortedKV = Object.entries(kv).sort(Comparator);
    //console.log(sortedKV);
    console.log(Object.values(sortedKV))
    //console.log([[Object.keys(sortedKV)], [Object.values(sortedKV)]]);
};

function Comparator(a, b) {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    return 0;
  };

keysAndValues({ a: 1, b: 2, c: 3 });
/*keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
keysAndValues({ key1: true, key2: false, key3: undefined })
keysAndValues({ key4: true, apple: false, key3: undefined })*/
