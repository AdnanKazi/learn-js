"use strict"; // Treat all JS code as newer version

// alert(3+3) // we are using node js not browser 

console.log(2+3) 
console.log("Adnan")

let anme  = "Adnan"
let age =23
let isLoggedIn = false

// number  => 2 to power 53
// bigint 
// string => ""
// boolean => true/false
// null => standalone value 
// undefined =>
// symbol => unique
// object => 

console.log(typeof isLoggedIn)
console.log(typeof null) // object 
console.log(typeof undefined) // undefined 


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


// Stack(Premitive ) vs Heap (Non premitive data types are stored in heap memory)

let myName = "Adnan"
let anotherName = myName
anotherName = "Kazi"
console.log(myName, anotherName) // Adnan Kazi
