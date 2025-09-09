// // // Remember, we're gonna use strict mode in all scripts now!
// // "use strict";

// // // // Professional Development Environment Setup

// // // console.log("=== DEVELOPMENT ENVIRONMENT SETUP ===");

// // // // Create some messy code - don't worry about formatting yet
// // // const messyExample = function (name, age) {
// // //   if (age >= 18) {
// // //     return "Hello " + name + ", you are an adult";
// // //   } else {
// // //     return "Hello " + name + ", you are a minor";
// // //   }
// // // };

// // // console.log("Current messy code example:", messyExample("John", 25));
// // // console.log("Goal: Automatic formatting, auto-refresh, and typing shortcuts");

// // // function testExtensions() {
// // //   const extensionTests = [
// // //     { name: "Prettier", status: "installed", purpose: "code formatting" },
// // //     { name: "Live Server", status: "installed", purpose: "auto refresh" },
// // //     {
// // //       name: "Auto Rename Tag",
// // //       status: "installed",
// // //       purpose: "HTML efficiency",
// // //     },
// // //   ];

// // //   return extensionTests;
// // // }

// // // const extensionStatus = testExtensions();
// // // console.log("Extension installation status:", extensionStatus);

// // // const prettierTest = {
// // //   firstName: "Sarah",
// // //   lastName: "Johnson",
// // //   skills: ["JavaScript", "React", "Node.js"],
// // //   isActive: true,
// // // };

// // // const messyFunction = function (x, y, z) {
// // //   if (x > 0 && y > 0) {
// // //     return x + y + z;
// // //   } else {
// // //     return 0;
// // //   }
// // // };

// // // const messyArrow = (items) => {
// // //   return items.map((item) => {
// // //     return item.toUpperCase();
// // //   });
// // // };

// // // console.log(
// // //   "Before Prettier formatting - this code works but looks unprofessional"
// // // );

// // // const studentTest = {
// // //   firstName: "Arden",
// // //   skills: ["HTML", "CSS", "JavaScript"],
// // //   experience: "beginner",
// // //   goals: ["become-develper", "build-projects"],
// // // };

// // // const testFunc = function (data) {
// // //   for (let i = 0; i < data.length; i++) {
// // //     console.log(data[i]);
// // //   }
// // // };

// // // Live Server Testing

// // let liveServerTest = "Initial message - change #1";
// // console.log("Live Server test:", liveServerTest);

// // const timeStamp = new Date().toLocaleTimeString();
// // const updateCount = 1;

// // console.log(`Live Server update #${updateCount} at ${timeStamp}`);

// // function demonstrateLiveReload() {
// //   const randomColor = ["red", "blue", "green", "purple", "orange"][
// //     Math.floor(Math.random() * 5)
// //   ];
// //   const message = `Live Server rocks! Random color: ${randomColor}`;

// //   console.log(message);
// //   return message;
// // }

// // demonstrateLiveReload();

// // // Student Exercise
// // function showCurrentTime() {
// //   const now = new Date().toLocaleTimeString();
// //   console.log("Current time:", now);
// //   return now;
// // }

// // showCurrentTime();

// // // Code Snippets Testing
// // console.log("Testing snippet functionality - cl + Tab created this!");

// // function testSnippets() {
// //   console.log("Function created with snippet - func + Tab!");
// //   return "Snippets working perfectly!";
// // }

// // testSnippets();

// // const snippetTest = (message) => {
// //   console.log(`Arrow function from snippet: ${message}`);
// //   return message;
// // };

// // snippetTest("Snippets save so much typing time!");

// // The 4-Step Problem-Solving Framework

// /*
// STEP 1: UNDERSTAND THE PROBLEM
// - Ask the right questions until 100% clear
// - Key questions:
//   * What exactly needs to be accomplished?
//   * What are the inputs and expected outputs?
//   * What are the edge cases and constraints?
//   * Are there any special requirements?
// */

// /*
// STEP 2: DIVIDE AND CONQUER
// - Break big problem into small sub-problems
// - Strategy:
//   * Identify the main components
//   * Find dependencies between components
//   * Order sub-problems logically
//   * Ensure each piece is solvable independently
// */

// /*
// STEP 3: RESEARCH SOLUTIONS
// - Find answers for sub-problems you cannot solve
// - Best sources: MDN Documentation, Stack Overflow, Google
// - Research tips: Be specific, understand before implementing
// */

// /*
// STEP 4: IMPLEMENT AND TEST
// - Code the solution step by step with testing
// - Start simple, test each piece, combine gradually
// */

// console.log("4-Step Framework: Understand → Divide → Research → Implement");

// // PRACTICAL PROBLEM-SOLVING: Smart Home Thermometer

// /*
// PROBLEM STATEMENT:
// Given an array of temperatures from one day, calculate the temperature amplitude.
// Keep in mind that sometimes there might be a sensor error.

// Test data: [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

// STEP 1: UNDERSTANDING THE PROBLEM
// - Temperature amplitude = difference between highest and lowest temperature
// - Sensor errors = 'error' strings that should be ignored
// - Return a number representing amplitude (max - min)

// STEP 2: SUB-PROBLEMS
// 1. How to ignore errors? (Skip non-number values)
// 2. Find max value in temperature array
// 3. Find min value in temperature array
// 4. Subtract min from max and return result
// */

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log(max, min);
//   return max - min;
// };

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// ////////////////////////////////////
// // EXTENDED PROBLEM: Two Arrays

// /*
// PROBLEM 2: Function should handle TWO arrays of temperatures

// STEP 1: UNDERSTAND - Merge arrays, then apply existing logic
// STEP 2: SUB-PROBLEMS - 1) Merge arrays 2) Use existing algorithm
// STEP 3: RESEARCH - array1.concat(array2) method
// STEP 4: IMPLEMENT - Combine and reuse existing code
// */

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log(max, min);
//   return max - min;
// };

// const array1 = [3, 5, 1];
// const array2 = [9, 0, 5];
// const amplitudeNew = calcTempAmplitudeNew(array1, array2);
// console.log(amplitudeNew);

// console.log(
//   "Problem-solving framework applied successfully to extended challenge!"
// );

// console.log("Framework mastered - ready for the independet problem solving");

// Developer Skills Hour 3 - Research Skills & Debugging Fundamentals
"use strict";

console.log("=== HOUR 3: RESEARCH & DEBUGGING MASTERY ===");

console.log(
  "Goal: Master research and debugging like a professional developer"
);

console.log(
  "Strategic research builds lasting knowledge, not just quick fixes"
);

// PROFESSIONAL GOOGLE RESEARCH TECHNIQUES
// STACK OVERFLOW RESEARCH RESULTS

function reverseStringMethods(str) {
  const method1 = str.split("").reverse().join("");

  let method2 = "";
  for (let i = str.length - 1; i >= 0; i--) {
    method2 += str[i];
  }

  const method3 = [...str].reverse().join("");

  return { method1, method2, method3 };
}

const reverseResults = reverseStringMethods("hello");
console.log("Stack Overflow research results:", reverseResults);

function demonstrateConcat() {
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const array3 = [7, 8, 9];

  const simple = array1.concat(array2);
  const multiple = array1.concat(array2, array3);

  // Verify concat doesn't modify original arrays
  console.log("Original array1 unchanged:", array1);

  return { simple, multiple };
}

const concatResults = demonstrateConcat();
console.log("MDN documentation applied:", concatResults);

// SYSTEMATIC DEBUGGING METHODOLOGY

function calculateAverageScore(scores) {
  let total = 0;

  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }

  return total / scores.length;
}

//const testScores = [85, 92, 78, 96, 88];
const buggyResult = calculateAverageScore(testScores);
console.log("Buggy result:", buggyResult);

// BROWSER DEVELOPER TOOLS MASTERY

function demonstrateConsoleDebugging(data) {
  console.group("Debugging Session");

  console.log("Input data:", data);

  if (typeof data !== "object" || data === null) {
    console.warn("Warning: Expected object or array, got", data);
    console.groupEnd();
    return 0;
  }

  try {
    console.table(data);
  } catch (e) {
    console.error("Error displaying table:", e.message);
  }

  console.groupEnd();

  return Array.isArray(data) ? data.length : Object.keys(data).length;
}

const arrayData = [1, 2, 3, 4, 5];
const objectData = { name: "John", age: 30, city: "New York" };
const invalidData = null; // extra test

demonstrateConsoleDebugging(arrayData);
demonstrateConsoleDebugging(objectData);
demonstrateConsoleDebugging(invalidData);

// DEBUGGER STATEMENT AND BREAKPOINTS

function stepThroughDebugging(numbers) {
  debugger;

  let sum = 0;
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    console.log(`Processing index ${i}: value =`, currentNumber);

    if (typeof currentNumber === "number" && Number.isFinite(currentNumber)) {
      sum += currentNumber;
      count++;
    } else {
      console.error(`Invalid number at index ${i}:`, currentNumber);
    }
  }

  const average = count > 0 ? sum / count : 0;
  console.log("Final results:", { sum, count, average });

  return average;
}

const mixedNumbers = [10, 20, "error", 30, null, 40, NaN, Infinity];
const debugResult = stepThroughDebugging(mixedNumbers);
console.log("Debug session result:", debugResult);

// SYSTEMATIC BUG FIXING APPLICATION

function calculateAverageScoreFixed(scores) {
  if (!Array.isArray(scores) || scores.length === 0) {
    console.error("Invalid input: scores must be a non-empty array");
    return 0;
  }

  let total = 0;

  for (let i = 0; i < scores.length; i++) {
    if (typeof scores[i] === "number") {
      total += scores[i];
    } else {
      console.warn(`Skipping non-number value at index ${i}:`, scores[i]);
    }
  }
  return total / scores.length;
}

const testScores = [85, 92, 78, 96, 88];

const fixedResult = calculateAverageScoreFixed(testScores);
console.log("Fixed result:", fixedResult);

// COMPREHENSIVE TESTING
console.group("Debugging Verification Tests");

function calculateAverageScoreFixed(scores) {
  if (!Array.isArray(scores) || scores.length === 0) {
    console.error("Invalid input: scores must be a non-empty array");
    return 0;
  }

  let total = 0;

  for (let i = 0; i < scores.length; i++) {
    if (typeof scores[i] === "number") {
      total += scores[i];
    } else {
      console.warn(`Skipping non-number value at index ${i}:`, scores[i]);
    }
  }

  return total / scores.length;
}

const normalScores = [85, 92, 78, 96, 88];
const normalResult = calculateAverageScoreFixed(normalScores);
console.log("Normal case result:", normalResult);

const mixedScores = [85, "invalid", 92, null, 78];
const mixedResult = calculateAverageScoreFixed(mixedScores);
console.log("Mixed data result:", mixedResult);

const errorResult = calculateAverageScoreFixed("not an array");
console.log("Error case result:", errorResult);

const emptyResult = calculateAverageScoreFixed([]);
console.log("Empty array result:", emptyResult);

console.groupEnd();

console.log("Systematic debugging process successfully applied!");
console.log(
  "All bugs identified, isolated, investigated, fixed, and prevented"
);
