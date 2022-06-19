// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

const ages = [3, 9, 23, 64, 2, 8, 28, 93];

//Programmatically subtract the value of the first element in the array from the value in the last
//element of the array (do not use numbers to reference the last element, find it programmatically,
//ages[7] – ages[0] is not allowed). Print the result to the console.

function subtractAge() {
  const subtractAge = ages[ages.length - 1] - ages.shift();
  console.log(subtractAge);
}
subtractAge();

//Add a new age to your array and repeat the step above to ensure it is dynamic
//(works for arrays of different lengths).

ages.push(5);

function subtractAge() {
  const subtractAge = ages[ages.length - 1] - ages[0];
  console.log(subtractAge);
}
subtractAge();

//Use a loop to iterate through the array and calculate the average age.
//Print the result to the console.

let sum = 0;

for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}

console.log('Average age is', sum / ages.length);

//Create an array called names that contains the following values:
//‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//Use a loop to iterate through the array and calculate the average number
//of letters per name. Print the result to the console.
let totalLetters = 0;

for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length;
}

console.log("Average number of letters per name:", totalLetters / names.length);

//Use a loop to iterate through the array again and concatenate all the names
//together, separated by spaces, and print the result to the console.

for (let i = 0; i < names.length; i++) {
  namesWithSpaces = names.join(" ");
}
console.log('The names are', namesWithSpaces);

//Access the last element in an array
console.log('The last element is', names[names.length - 1]);

//Access the first element in an array
console.log('The first element is', names.shift());

//Create a new array called nameLengths. Write a loop to iterate over the previously
//created names array and add the length of each name to the nameLengths array.

let nameLengths = [];
for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
}
console.log(nameLengths);

//Write a loop to iterate over the nameLengths array and calculate the sum of all the
//elements in the array. Print the result to the console.
let sumOfElements = 0;

for (let i = 0; i < nameLengths.length; i++) {
  sumOfElements += nameLengths[i];
}
console.log('The sum of all elements is', sumOfElements);

//Write a function that takes two parameters, word and n, as arguments and returns the word
//concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect
//the function to return ‘HelloHelloHello’).

var word = "Hello";
var n = 3;

function repeat(word, n) {
  return word.repeat(n);
}
console.log(repeat(word, n));

//Write a function that takes two parameters, firstName and lastName, and returns a full name
//(the full name should be the first and the last name separated by a space).

firstName = "Irina";
lastName = "Meier";

function createFullName(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log('Full Name:', createFullName(firstName, lastName));

//Write a function that takes an array of numbers and returns true
//if the sum of all the numbers in the array is greater than 100.

//Create an array
let nums = [21, 284, 90];

//Create a function
function sumOfNum(array) {
  let sum = 0;
  // Loop to iterate through the array of numbers
  for (let i = 0; i < array.length; i++) {
    console.log("Sum before iteration", sum);
    sum += array[i];
    console.log("Sum after iteration", sum);
  }
  //If statement that returns true if the sum of the numbers is greater than 100
  if (sum > 100) {
    return true;
  } else {
    return false;
  }
}
console.log(sumOfNum(nums));

//Write a function that takes an array of numbers and returns the average
//of all the elements in the array.

let numAry = [30, 2, 8];
let total = 0;

function findAverage(array1) {    
    for (let i = 0; i < array1.length; i++) {
    total += array1[i]; 
}
    console.log('Average of all the elements in the array is', total / array1.length);
}

findAverage(numAry);

//Write a function that takes two arrays of numbers and returns true if the average of the 
//elements in the first array is greater than the average of the elements in the second array.

let aryOfNum1 = [15, 5, 10];
let aryOfNum2 = [1, 4, 6];

let totalAryOfNum1 = 0;
let totalAryOfNum2 = 0;

function findAverageOfArray1 (average1) {
    for(let i = 0; i < average1.length; i++) {
    totalAryOfNum1 += average1[i];
}   
    return totalAryOfNum1 / average1.length;
}
let average1 = findAverageOfArray1(aryOfNum1);

function findAverageOfArray2(average2) {
    for(let i = 0; i < average2.length; i++) {
    totalAryOfNum2 += average2[i];
}
    return totalAryOfNum2 / average2.length;
}
let average2 = findAverageOfArray2(aryOfNum2);

function compareArrays() {
    console.log(average1, average2);
    if (average1 > average2) {
        return 'The average of elements in the first array is greater than the average of elements in the second array';
    } else {
        return 'The average in the first array is smaller than the average in the second array'
    }
}
console.log(compareArrays());

//Write a function called willBuyDrink that takes a boolean isHotOutside,
//and a number moneyInPocket, and returns true if it is hot outside and if
//moneyInPocket is greater than 10.50.
let isHotOutside = true;
let moneyInPocket = 11;

function willBuyDrink(isHotOutside, moneyInPocket) {
  if (isHotOutside === isHotOutside && moneyInPocket > 10.5) {
    return "I will buy a drink";
  }
}
console.log(willBuyDrink(isHotOutside, moneyInPocket));

//Create a function of your own that solves a problem. In comments, 
//write what the function does and why you created it.

//This function calculates a class final grade, where the midterm is worth 30% of the grade,  
//the final exam is worth 50% of the grade and participation is worth 20% of the grade. I created
//it because I am a university lecturer and I always calculate students' final grades manually. This 
//code will make this process more efficient. 
var firstName1 = 'Donald';
var lastName1 = 'Duck';
var midtermGrade = '87';
var finalExamGrade = '92';
var participationGrade = '70';

function calculateMidtermGrade () {
    for (i = 0; i < midtermGrade; i++) { 
        return  midtermGrade * 0.3;
    }  
}
calculateMidtermGrade ();

function calculateFinalExamGrade () {
    for (i =0; i < finalExamGrade; i++) {
        return finalExamGrade * 0.5;
    }
}
calculateFinalExamGrade ();

function calculateParticipationGrade () {
    for (i = 0; i < participationGrade; i++) {
        return participationGrade * 0.2;
    }
}
calculateParticipationGrade ();

var finalGrade = (calculateMidtermGrade() + calculateFinalExamGrade() + calculateParticipationGrade());

console.log (firstName1 + ' ' + lastName1 + "'s course grade is " + finalGrade + ' %');


