// Open up your console to use throughout the exercise to check if things are working

console.log("Hello world");




// Answer to the best of your abilities & console log for each of the questions below.

let thisExercise = "Let's learn Javascript!";

console.log(thisExercise);




// PART A: Defining variables – Define a variable for each:

// 1. A string with your name

// 2. How many classes you're taking? – As a number

// 3. How many pets do you have? – As a string

// 4. Are you at school today? Use a boolean 

// 5. An array of your 5 favorite animals

// 6. An array with your 3 favorite numbers

// 7. An object about a movie that consists of its title, director, year, and if it's your favorite or not (using a boolean)




// PART B: Using variables

// 1. Define a variable with your favorite dish (as a string). Console log it.

// 2. Console log the message "My favorite dish is [your food]" using a string and the variable you previously created.

// 3. Reuse your food variable, and change its value to a food that you don't like. Console log it.

// 4. Console log another message "I don't like [your food]" using a string and your food variable. The goal is to see the new value of your variable show up as a part of the message.


let myDish = "noodles";
console.log(myDish);

console.log("My favorite food is " + myDish);

myDish = "asparagus";
console.log(myDish);

console.log("I don't like " + myDish);



// PART C: MATH

// 1. Create 2 different variables for the name and last name of a celebrity you like. Console log a message showing their full name using these variables. (Tip: you can add spaces in addition to letters in a string, or as an additional empty string)

// 2. Console log your age by subtracting your birth year from this year.

// 3. How many classes have you taken this semester so far? Multiply your weekly number of classes with 8 (weeks). Console log it.

// 4. What is the remainder when you divide 38562 by 71? Console log using a single equation.


let name = "Florence";
let lastname = "Welch";
console.log(name + " " + lastname);

console.log(2024 - 1962);

console.log(5 * 8);

console.log(38562 % 71);




// PART D: Arrays

// 1. Create an array of 6 friends (their names) & console log it (inspect how it shows up, and the numbers given to each item in your array)

// 2. Console log the first friend in your array using a number

// 3. Console log the last friend in your array using a number

// 4. Console log the number of items in your array (Tip: use array.length)

// 5. Console log the last friend in your array again, but this time us array.length instead of a set number


let myFriends = ["John", "Anne", "Shiv", "Esra", "Jin", "Kara"];

console.log(myFriends);
console.log(myFriends[0]);
console.log(myFriends[5]);
console.log(myFriends.length);
console.log(myFriends[myFriends.length - 1]);




// PART E: Objects

// 1. Create an object about a person consisting of their name, age, location, hair color, and occupation. 

// 2. Console log the object and inspect it in the console.

// 3. Console log the person's name

// 4. Console log the 

let person = { name: "Beyonce", age: "Australia", lifespan: 15, color: "gray" };
console.log(person);
console.log(animal.species);




// PART F: More math!                  
  
// 1. Console log a random number between 0 and 1.

// 2. Console log a random number between 0 and 365.

// 3. Console log a random integer (whole number) between 0 and 365.

// 4. Create an array of 5 fruits, and console log a random fruit in your array. You want to see the console logging different fruits when you refresh the page. (Tip: Remember array.length)

// 5. Create and console log a message that says "Today's fruit is X". You want to see the message change to a different fruit when you refresh the page.

console.log(Math.random());
console.log(Math.random() * 365);
console.log(Math.floor(Math.random() * 365));

let fruits = ["apple", "orange", "grape", "kiwi", "watermelon"];
console.log(fruits [Math.floor(Math.random() * fruits.length)]);

console.log("Today's fruit is " + fruits [Math.floor(Math.random() * fruits.length)]);


                    


// Test
let ageNumber = 45;
let myAge = "I am " + ageNumber + " years old";
console.log(myAge);

let lottery = [12, 24, 50, 32, 80];
let winner = "The winning number is " + lottery[Math.floor(Math.random() * lottery.length)];
console.log(winner);
