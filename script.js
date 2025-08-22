// // JavaScript Fundamentals - Part 1
// // We'll write our code here!
// let js = "amazing";
// console.log(40 +8 + 23 - 10);

// console.log("=== VARIABLES ===");

// //let firstName = "Arden";
// //console.log(firstName);

// //let age = 20;
// //age = 21;
// //console.log(age);

// const birthYear = 2005;
// console.log(birthYear);
// const PI = 3.1415;
// console.log(PI);

// const country = "Portugal";
// const language = "Portuguese";
// const population = 10;

// //let age = 25;
// //age = 26;

// let myCurrentJob = "Video editor";

// console.log("=== DATA TYPES ===");

// // Integer
// let age = 23;
// console.log(age);
// console.log(typeof age);

// // String
// //et firstName = "Arden";
// //console.log(firstName);
// //console.log(typeof firstName);

// //Boolean
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);

// //Undefined
// let year;
// console.log(year);
// console.log(typeof year);

// //Start as a number
// let dynamicVariable = 23;
// console.log(dynamicVariable, typeof dynamicVariable);

// //String
// dynamicVariable = "Now i'm a string";
// console.log(dynamicVariable, typeof dynamicVariable);

// //Boolean
// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable);

// // Exercise 1
// let myFirstName = "Arden";
// console.log(myFirstName, typeof myFirstName);

// let myAge = 21;
// console.log(myAge, typeof myAge);

// let myNumber = 18;
// console.log(myNumber, typeof myNumber);

// let likeJavaScript = true;
// console.log(likeJavaScript, typeof likeJavaScript);

// //Exercise 2
// let myScore = 200;
// console.log(myScore);
// myScore = 150;
// console.log(myScore);

// const points ="200";
// console.log(points);

// //Exercise 3

// console.log(typeof 42); //Integer
// console.log(typeof "Hello"); //String
// console.log(typeof true); //Boolean
// console.log(typeof undefined); //Undefined


// //JavaScript Fundamentals - Part 1

// Mathematical Operators

console.log("=== MATH OEPRATORS ===");

const now = 2025;
const agePrimo = now - 2022;
const agePancake = now - 2021;
console.log(agePrimo, agePancake);

console.log("Math Operators")
console.log("Addition:", 10 + 5);
console.log("Subtraction:", 20 - 8);
console.log("Multiplication:", 4 * 7);
console.log("Division:", 15 / 3);
console.log("Exponentiation:", 2 ** 3);

const firstName = "Primo";
const lastName = "Reyes"
console.log(firstName + " " + lastName);

console.log("Hello " + "World" + "!");
console.log("I am" + 25 + "years old");

//Basic Assignments

console.log("==== ASSIGNEMENT OPERATORS ====");

let x = 10 + 5;
console.log("x starts as:", x);

// Assignements Shortcuts

x += 10;
console.log("After x += 10: ", x);

x *= 4;
console.log("After x *= 4: ", x);

x /= 2;
console.log("After x /= 2:", x);


//Increment and Decrement

x++;
console.log("After x++:", x);

x--;
x--;
console.log("After x-- twice:", x);

//Exercise: Score Calculator

let myScore = 100;
myScore += 50;
myScore *= 2;
myScore -= 25;

myScore++;
myScore++;

console.log(myScore)

//Comparison Operators

//Basic Compariosons

console.log("==== COMPARISON OPERATORS ====");

console.log("Age Comparison:");
console.log(agePrimo > agePancake);
console.log(agePancake >= 21);
console.log(agePrimo < 30);

console.log("Number comparison:");
console.log(25 > 20);
console.log(15 < 10);
console.log(18 >= 19);
console.log(16 <= 15);

const isFullAge = agePancake >= 18;
console.log("Is Pancake an adult cat:", isFullAge);

const isPrimoOlder = agePrimo > agePancake;
console.log("Is Primo older than Pancake:", isPrimoOlder);

console.log("Complex Comparisons:");
console.log(now - 1991 > now - 2019);

//Exercise: Age Verification
const myAge = 21;
console.log(myAge >=18);
console.log(100 > 99);

const isAdult = myAge >=18;
console.log("isAdult");
console.log(10 + 5 > 20 - 2);

