// Part 1: Debugging Challenge

let result = Number("5") - 2;
// Number("5") explicitly converts the string "5" into the number 5.
// This makes the subtraction clear and prevents unexpected type conversion.
console.log("The result is: " + result);

let isValid = Boolean("false");
// A non-empty string is converted to true by Boolean().
// This is important because Boolean("false") is true, not false.
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = Number(age) + 5;
// Number(age) explicitly converts "25" from a string to a number.
// This allows us to add 5 mathematically instead of joining the values as text.
console.log("Total Age: " + totalAge);


// Part 2: Examples of Type Conversion

// Implicit type conversion
let numberValue = "10";
let implicitResult = numberValue * 2;
// JavaScript automatically converts "10" from a string to a number.
console.log("Before implicit conversion:", numberValue, typeof numberValue);
console.log("After implicit conversion:", implicitResult, typeof implicitResult);

// Explicit type conversion
let unknownValue = null;
let explicitResult = Number(unknownValue);
// Number(null) explicitly converts null to the number 0.
console.log("Before explicit conversion:", unknownValue, typeof unknownValue);
console.log("After explicit conversion:", explicitResult, typeof explicitResult);