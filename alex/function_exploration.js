/*jshint esversion: 6 */
//Let's talk about functions

//What are functions?
//It is a way of bundling a piece of repetitive
//into a reusable chunk

//Named function declarations - available anywhere in this file
function launchTheMissles() {
  console.log('Launching the missles');
}
//Our first function
function square(num) {
  // launchTheMissles(); // This is BAD!
  return num * num;
}

const squareOfTwo = square(2);
//  console.log(num);  doesn't exist outside the function
                  // variables are encased in functions
console.log('squareOfTwo', squareOfTwo);









// console.log('Cube of 2 before: ', cube(2)); //BROKE! Variable not defined here

// assigns function to variables
const cube = function cube(num) {
  return num*num*num;
};

// const cubeFatArrow = (num) => {
//   return num * num * num;
// };
//Alternatively
const cubeFatArrow = num => num * num * num;

console.log('Cube of 2 after: ', cube(2));
console.log('cubeFatArrow of 2:', cubeFatArrow(2));
