'use strict';

// //GLOBAL Execution Context
// console.log('Starting program');

// function alpha() {
//   console.log('alpha:start');
//   beta();
//   console.log('alpha: end');
// }

// function beta() {
//   console.log('beta');
// }
// alpha();

// const outer = 'global';

// function demoScope() {
//   const inner = 'function';
//   if (true) {
//     const blockConst = 'block';
//     var functionVar = ' var-function-scoped';
//     console.log(outer, inner, blockConst, functionVar);
//   }
//   console.log(outer, inner, functionVar);
// }

// demoScope();

//LEXICAL SCOPING
// const name = 'GlobalName';

// function a() {
//     const name = 'FunctionName';
//     function b() {
//         console.log(name);

//     }
//     b();

// }
// a();

console.log(varX);
console.log(letx);
console.log(constX);

var varX = 1;
let letx = 2;
const constX = 3;

console.log(addDecl(2, 3));
console.log(addExpression(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpression = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
