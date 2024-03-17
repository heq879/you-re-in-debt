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

// 2. Define a second variable where you combine a phrase (tip: use a string) and the food variable that you created. Console log your second variable.
    // Goal: When you console log this second variable, to have the console say that the food you defined earlier is your favorite dish (Ex: "My favorite dish is pizza")

// 3. Reuse your food variable, and change its value to a food that you don't like. Console log it.

// 4. Define a third variable where you combine another phrase (tip: use a string) and your food variable. Console log your third variable.
    // Goal: When you console log this third variable, to have the console say that the food you defined earlier is a food that you don't like (Ex: "I don't like asparagus")


let myDish = "noodles";
console.log (myDish);

let mySentence = "My favorite food is " + myDish;
console.log (mySentence);

myDish = "asparagus";
console.log (myDish);

let myOtherSentence = "I don't like " + myDish;
console.log (myOtherSentence);




// PART C: Math

// 1. 




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


                    
                    
                    