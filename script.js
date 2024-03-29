// Don't forget to use your console while working on the exercise!

console.log("Hello world");




// PART A: Conditionals 

// 1. Create a variable with your name. Write a conditional if statement that console logs "My name is [your name]" when your variable is your name. Try to reuse your variable in your message as well, instead of just typing your name
var myName = "Maee";

if (myName === "Maee") {
    console.log("My name is " + myName);
} else {
    console.log("This is not my name.");
}

// 2. Create a variable about whether it's the weekend or not (use a boolean). Write a conditional if else statement that console logs "It's the weekend :)" if it is, and console logs "It's not the weekend :(" if it's not. Try changing your variable to check if both states work.
var isWeekend = false;

if (isWeekend) {
    console.log("It's the weekend :)");
} else {
    console.log("It's not the weekend :(");
}

// 3. Create a variable with an age (use a number). Write a conditional else if statement that console logs "You are old enough" if the age is ove 21, "You are underage" if the age is under 21, and "Congrats on turning 21!" if the age is 21.
var myAge = 21

if (myAge > 21) {
    console.log("You are old enough");
} else if (myAge < 21) {
    console.log("You are underage");
} else {
    console.log("Congrats on turning 21!");
}

// PART B: Functions

// 1. Write a function that console logs a message. Run the function to see the message in the console.
function message (ok) {
  console.log ("I'm so confused."+ ok);
}

message ("Huh?");

// 2. Write a more dynamic function that has a parameter inside of the parentheses. Have it console log "I love the movie [movie name]". Use the argument to populate the movie name. Run the function 3 different times to console log 3 versions of the message.

function loveMovie(movieName) {
    console.log("I love the movie " + movieName);
}

loveMovie("Fantastic Mr.Fox");
loveMovie("Coraline");
loveMovie("The House");

// 3. Write a function with parameters that does a mathematical calculation and returns an answer. Create 3 variable that holds your function and gives its parameters different values. Console log each of these variables to see each of their values.

function calculate(num1, num2) {
    return num1 + num2;
}





// PART C: The DOM

// 1. Only using JS, change the copy of the heading.

// 2. Only using JS, change the image.

// 3. Only using JS, change the font size of the first paragraph to be larger

// 4. Only using JS, change the font of the second paragraph

// 5. Only using JS, change the background color of the page

// 6. In CSS, there is a rule with the selector "blue". Using JS, apply this CSS rule to your paragraph. (You may change the color/name)

// 7. In CSS, add a new rule that rounds corners to a new class. Using JS, add this class to the image.




// PART D: Events

// 1. Using event listeners and functions, make the copy of the title change once you click on it

// 2. Inside of your existing function, add one more line that makes the color of the title change on the same click as well

// 3. Once you click on the button, have the image change to a different image.
