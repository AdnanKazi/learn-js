// ========================================================
console.log("Conversion to Number")

let score = "33"

console.log(typeof(score)) // string

// score = score + 1 
score = Number(score) + 1
console.log(score) // 34


// score = "33abc" => NaN => Not a number
// score = "abc33" => NaN => Not a number
// score = "33.33" => 33.33
// score = true => 1
// score = false => 0"


// ========================================================

console.log("Conversion to String")

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn) // 1 => true , 0 => false
console.log(booleanIsLoggedIn)
console.log(typeof booleanIsLoggedIn)

// 1 => true
// 0 => false
// "" => false
// "adnan" => true
// " " => true
// null => false
// undefined => false
// "0" => true
// "1" => true


// ========================================================
console.log("Conversion to Boolean")

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber) // string
console.log(stringNumber) // "33"

// 33 => "33"
// 33.33 => "33.33"
// true => "true"
// false => "false"
// null => "null"
// undefined => "undefined"

///===================== operation ===================================
console.log("--- Operation ---")

let value = 3
let negValue = -value
console.log(negValue) // -

console.log("1" + 2) // "12"
console.log(1 + "2") // "12"
console.log("1" + "2") // "12"
console.log(1 + 2) // 3
console.log(1 + 2 + "3") // "33"
console.log("1" + 2 + 3) // "123"

console.log("4" - 2) // 2
console.log("4" - "2") // 2
console.log(4 - "2") // 2
console.log("4" - 2 + 3) // 5
console.log(4 - "2" + 3) // 5
console.log(4 - 2 + "3") // "23"

// ========================================================