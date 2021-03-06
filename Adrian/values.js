// This is the file for Values, Expressions and Statements
// This is a single-line comment in JavaScript
// values - What is a value?
// 3 - number
// "a" - string
// true - boolean => false - boolean
// [] - array
// {} - object

// Values and Variables
// Old School JavaScript
var x = 3; // I have assigned the variable x
              //the value of 3
var y = "a"; // I have assigned the variable y
              //the value of 'a';
var z = []; // I have assigned the variable z
            //the value of an empty array;
var a = {}; // I have assigned the variable a
            //the value of an empty object;

console.log(x);
console.log(y);
console.log(z);
console.log(a);

// constant bindings
const taxRate = 0.065;
console.log(taxRate);
//taxRate = 300.065; // cannot do this because this is a reassignment of a constant
                  // new browsers for const

//let bindings - new to the JavaScript
let myFavoriteColor = 'blue';
myFavoriteColor = 'green'; // this is allowed because
                           // let allows this reassignment

console.log(myFavoriteColor);


//expressions and Statements
// statements -> ; (semicolon)
// expression -> can be evaluated (operations with values)
// Good!
var k = 7;
var p = 3 * (k+2); // this contatins expressions to create a statement
//Bad!!!
// 3 * (k+2) = var p;// this is bad! Don't do it! It's broke!
