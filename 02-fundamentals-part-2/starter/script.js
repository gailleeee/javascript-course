// console.log("Part 2 is now working");

// // Functions - declarations and expressions

// console.log('=== FUNCTIONS ===');

// function logger() {
//     console.log("My name is Arden");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges!`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor (2, 4);
// console.log(appleOrangeJuice);

// const juice1 = fruitProcessor(5,0);
// const juice2 = fruitProcessor(2, 4);
// const juice3 = fruitProcessor(3, 2);
// console.log(juice1);

// // Function expressions
// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// };

// console.log(calcAge(2005));
// console.log(calcAge(2001));


// function introduce (firstName, lastName, age) {
//     const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`
//     return introduction;
// }
// console.log(introduce("Arden", "Radam", 20));

// function yearsUntilRetirement (birthYear, firstName) {
//     const age = calcAge (birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         return `${firstName} retires in ${retirement} years `;
//     } else {
//         return `${firstName} had already retired`;
//     }
//     }

//     console.log(yearsUntilRetirement(2005, "Arden"));

// // global scope

// const globeVar = "I am global";

// function testScope () {
//     const localVar = "I am Local";
//     console.log(globeVar);
//     console.log(localVar);
// }

// testScope ();
// console.log(localVar);
// console.log(globeVar);

// // Challanging Course

// function calcAverage(score1, score2, score3) {
//     return (score1 + score2 + score3) / 3;
// }

// function checkWinner (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         return `Dolphins Wins (${avgDolphins} vs. ${avgKoalas})`;
//     } else if (avgKoalas >= 2 * avgDolphins)n {
//         return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
//     } else {
//         return `No Team Wins! Koalas: ${avgKoalas}, Dolphins: ${avgDolphins}`
//     }
//         }

// // Test Data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// // Test Data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

const student1Grade = 85;
const student2Grade = 92;
const student3Grade = 78;

const grades = [85, 92, 78, 96, 88];
console.log(grades);

const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends);

const mixed =["Jonas", 27, true, friends];
console.log(mixed);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);

friends[1] = "Jay";
console.log(friends);

const firstName = "Nicole"
const nicole = [firstName, "Recinto", 2025 - 2002]
console.log(nicole);

const calcAge = function (birthYear) {
    return 2025 - birthYear;
};

const ages = [calcAge(2002), calcAge(2005), calcAge(2003)];
console.log(ages);

// Array Methods

const newLength = friends.push("Steven"); // adds back new array
console.log(friends);
console.log(newLength);
const newLength2 = friends.push("John");
console.log(friends);

friends.unshift("Maria");
console.log(friends);

const popped = friends.pop()
const popped2 = friends.pop()
console.log(popped);
console.log(friends);

const shifted = friends.shift();
console.log(shifted);
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));
console.log(friends.includes("Micheal"));
console.log(friends.includes("Maria"));


//Array Iterations - Loops

for (let index = 0; index < friends.length; index++) {
   console.log(friends[index]);
}

friends.forEach(
    function(friend, index) {
        console.log(`Friend ${index + 1 }; ${friend}`);
    }
)

friends.forEach((friend, index) => {
  console.log(`Friend ${index + 1}: ${friend}`);
});

friends.forEach((friend, index) => {
  console.log(`Friend ${index + 1}: ${friend}`);
});

const grades2 = [ 85, 92, 78, 90, 88, 74];
let total = 0; 

for (let index = 0; index < grades.length; index++) {
    total += grades[index];
    
}

const average = total / grades.length;
console.log(`Average grades: ${average.toFixed(2)}`);

let passedCount = 0;
grades2.forEach(
    grade => {
    if (grade >= 70) passedCount++;
    }
);

console.log(`${passedCount} out of ${grades2.length} students passed`);


const grades3 = [78, 85, 92, 67, 88, 95, 73, 82];
let totalGrade = 0;

for (let index = 0; index < grades3.length; index++) {
    total += grades3[index]; 
    return totalGrade / grades3.length;
}


function calculateAverage(grades3) {
let totalGrade = 0;

for (let index = 0; index < grades3.length; index++) {
    total += grades3[index]; 
    return totalGrade / grades3.length;
}
}


function findHighestGrade(grades) {
        let highestGrade = [0];
for (let index = 1; index < grades3.length; index++) {
    total += grades3[index];
    return highestGrade / grades3.length;
}
}

function findLowestGrade(grades) {
        let lowestGrade = [0];
for (let index = 0; index < grades3.length; index++) {
    total += grades3[index];
    return lowestGrade / grades3.length;
}

// Function to count passing students
function countPassing(grades, passingGrade) {
    let passedCount = 0;
grades3.forEach(
    grade => {
    if (grade >= 70) passedCount++;
    }
);
}

// Generate complete report
const average = calculateAverage(grades3);
const highest = findHighestGrade(grades3);
const lowest = findLowestGrade(grades3);
const passing = countPassing(grades3, 70);

console.log("=== GRADE REPORT ===");
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Passing students: ${passing} out of ${grades3.length}`);
}