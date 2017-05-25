const aString = 'The quick brown fox jumped over the moon';

const stringLength = aString.length;
console.log('String Length: ', stringLength);

const firstChar = aString.charAt(0);
console.log('The first letter: ', firstChar);

const firstCharAnotherWay = aString[0];
console.log('The first letter another way: ', firstCharAnotherWay);

const seventhChar = aString[6];
console.log('The seventh letter : ', aString[6]);

const stringsTogether = aString.concat("!");
const stringsTogetherAgain = aString + "!";
console.log('String Together: ', stringsTogether);
console.log('String Together Again: ', stringsTogetherAgain);
console.log('aString: ', aString);

console.log('The first five characters of the string are:', aString.substring(0,5));
console.log('The first five characters of the string are:', aString.slice(0,5));
const words = aString.split(" ");
console.log('Words: ', words);

// What are the number of words in the string?
const numberOfWords = words.length;
console.log('The number of words in the string: ', numberOfWords);

// How many spaces are in the string?
const numberOfSpaces = numberOfWords - 1;
console.log('The number of spaces in the string: ', numberOfSpaces);

// What is the longest word in the string?
const startingWords = aString.split(' ');
const lengthOfWords = startingWords.map(word => word.length);
const maxLength = Math.max(...lengthOfWords);
console.log("The longest word in the string: ", words[lengthOfWords.indexOf(maxLength)]);
// How do I reverse a string?
const reverseString = aString.split('');
console.log('Reversed String: ', reverseString.reverse().join(''));
