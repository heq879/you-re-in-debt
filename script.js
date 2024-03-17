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



// PART C: Math

// 1. Create 2 different variables for the name and last name of a celebrity you like. Console log a message showing their full name using these variables.

// 2. Console log your age by subtracting your birth year from this year.

// 3. What is the remainder when you divide 2024 by 6? 




// PART D: Arrays

// 1. Create an array of 6 friends (their names) & console log it (inspect how it shows up, and the numbers given to each item in your array)

// 2. Console log the first friend in your array using a number

// 3. Console log the last friend in your array using a number

// 4. Console log the number of items in your array (Tip: use array.length)

// 5. Console log the first friend in your array again, but this time us array.length instead of a set number

// 6. Console log a random friend in your array (Tip: You want to see the console logging different friends when you refresh the page)


let myFriends = ["John", "Anne", "Shiv", "Esra", "Jin", "Kara"];

console.log(myFriends);
console.log(myFriends[0]);
console.log(myFriends[5]);
console.log(myFriends.length);
console.log(myFriends[myFriends.length - 1]);
console.log(myFriends[Math.floor(Math.random() * myFriends.length)]);


// Test
let ageNumber = 45;
let myAge = "I am " + ageNumber + " years old";
console.log(myAge);

let lottery = [12, 24, 50, 32, 80];
let winner = "The winning number is " + lottery[Math.floor(Math.random() * lottery.length)];
console.log(winner);


                    
                    
                    