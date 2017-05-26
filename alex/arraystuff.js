//All about arrays!

//How do I create an array?
//Empty?
const empty = [];
//Numbers?
const numbers = [1, 2, 3];
//Strings?
const strings = ['a', 'b', 'c'];
//Objects?
const objects = [{}, {}, {}];
//Array of Arrays?
const arrays = [[], [], []];
//The above are examples of creating arrays using the array
//literal syntax

//How many elemts are in the array?
const emptyLength = empty.length;
console.log('Empty Length: ', emptyLength);
const numbersLength = numbers.length;
console.log('Numbers Length: ', numbersLength);

//How can I access an element of an array?
const firstString = strings[0];
console.log('First String from Strings Array: ', firstString);
const thirdObject = objects[2];
console.log('The third object from Objects: ', thirdObject);
console.log('Use an index that is greater the length: ', objects[3]);

//How can I change the element of an array?
numbers[2] = 4;
console.log('Numbers after changing 3 to 4', numbers);
//How can I add elements to an array on the right hand side?
console.log('strings before the push: ', strings);
strings.push('f');
console.log('strings after the push: ', strings);
const combined = numbers.concat(strings);
console.log('Combined array of numbers and strings', combined);

//How can I find the position of an element in the array?
//Warning: NUmbers and Strings work like you think they should.
//Objects and Arrays can do weird things

const positionOfB = strings.indexOf('b');
console.log('Position of B:', positionOfB);

const positionOfK = strings.indexOf('k');
console.log('Position of k:', positionOfK);

const lastTwoNumbers = numbers.slice(numbers.length-2);
console.log('The last two numbers of numbers:', lastTwoNumbers);


//forEach - I want to iterate through an array.
const resultOfForEach = numbers.forEach(function (number, index) {
console.log('Numbers: ', number, index);
});
console.log('resultOfForEach', resultOfForEach);
//FOREACH CHALLENGE
const x = [4,5,6,7,8,9];
//Write a foreach statement that prints out each of the elements
//and its position for the array x
xForEach = x.forEach(function (number, index) {
console.log('', number, index );
});

//map - I want to get a new array with changes to
//      each element of the original.
const stringLengths = strings.map(function lengthGetter(string, index) {
return string.length;
});
console.log('stringLengths', stringLengths);
//MAP CHALLENGE
const y = ['I', 'like', 'cheese','?'];
const yLengths = y.map(function lengths(string, index) {
return string.length;
});
console.log(yLengths);
const yFindK = y.map(function findK(string,index) {
return string.indexOf('k')
});
console.log(yFindK);
//filter - I want only certain elements that pass a test.
const lengthOfOneStrings = y.filter(function test(string, index){
return string.length === 1;
});
console.log('lengthOfOneStrings: ', lengthOfOneStrings);
//CHALLENGE
const stringsWithLengthBiggerThanOne = y.filter(function test(string, index){
return string.length > 1;
});
console.log('Strings with length bigger than 1:', stringsWithLengthBiggerThanOne);
//reduce - I want to take an array to something simpler.
const sumOfNumbers = numbers.reduce(function adder(acc, next) {
  console.log('acc: ', acc, 'next', next);
  return acc + next;
},0);
console.log('The sum of numbers is: ', sumOfNumbers);
