// Premitive data types
// Number, BigInt, String, Boolean, Null, Undefined, Symbol
let num = 42;
let bigIntNum = 9007199254741991n; // BigInt
let str = "Hello, World!";
let bool = true;
let nul = null;
let undef = undefined;
let sym = Symbol("unique");


// Non-primitive data type 
// Objects, Arrays, Functions
let obj = { name: "Adnan", age: 23 };
let arr = [1, 2, 3, 4, 5];
let func = function() { return "Hello"; };


// Displaying types
console.log(typeof num);        // "number"
console.log(typeof bigIntNum);  // "bigint"
console.log(typeof str);        // "string"
console.log(typeof bool);       // "boolean"
console.log(typeof nul);        // "object" (this is a known quirk in JavaScript)
console.log(typeof undef);      // "undefined"
console.log(typeof sym);        // "symbol"
console.log(typeof obj);        // "object"

// Example operations
console.log(num + 8);          // 50
console.log(str + " How are you?"); // "Hello, World! How are you?"
console.log(bool ? "Yes" : "No");   // "Yes"
console.log(obj.name);         // "Adnan"