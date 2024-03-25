// Open up your console to use throughout the exercise to check if things are working

console.log("Hello world");



// PART A: Conditionals 

// 1. Create a variable with your name. Write a conditional if statement that console logs "My name is [your name]" when your variable is your name. Try to reuse your variable in your message as well, instead of just typing your name

// 2. Create a variable about whether it's the weekend or not (use a boolean). Write a conditional if else statement that console logs "It's the weekend :)" if it is, and console logs "It's not the weekend :(" if it's not. Try changing your variable to check if both states work.

// 3. Create a variable with an age. Write a conditional else if statement that console logs "You are old enough" if the age is ove 21, "You are underage" if the age is under 21, and "Congrats on turning 21!" if the age is 21.


let myName = "Defne";
if (myName == "Defne") {
  console.log("My name is " + myName)
}


let itIsTheWeekend = false;
if (itIsTheWeekend == true) {
  console.log("It's the weekend :)")
} else {
  console.log("It's not the weekend :(")
}


let myAge = 20;
if (myAge > 21) {
  console.log("You are old enough")
} else if (myAge < 21) {
  console.log("You are underage")
} else if (myAge == 21) {
  console.log("Congrats on turning 21!")
}



// PART B: Functions

// 1. Write a function that console logs a message. Run the function to see the message in the console.

// 

function myMessage() {
  console.log("Hello there")
};
myMessage();

let my


// PART X: Adding & changing content

// 1. Only using JS, change the copy of the heading.

// 2. Only usign JS, change the image.

// 3. Only using JS, change the font size of your header to be larger

// 4. In CSS, there is a rule with the selector "blue". Using JS, apply this CSS rule to your header to apply the existing CSS rule to it.

document.querySelector("h1").innerHTML = "New Title";
document.querySelector("img").src = "https://cdn.glitch.global/c61c7ecd-c992-456b-8136-a7497de5a768/koala.png?v=1711322726731";
document.querySelector("h1").style.fontSize = "50px";
document.querySelector("h1").classList.add("blue");

// ???
// 5. Using only JS, add a new paragraph element with additional content related to your topic to the page





// PART X

// 1. Using event listeners and functions, make the copy of the title change once you click on it

// 2. Inside of your function, add one more line that makes the color of the title change on click as well

// 3. Once you click on the button, have the image change to a different image.

let titleText = document.querySelector('h1');
titleText.addEventListener('click', myFunction);

function myFunction() {
     titleText.innerHTML = "Third title";
     titleText.style.color = "orange";
}


let myImage = document.querySelector("img");
let myButton = document.querySelector("button");
myButton.addEventListener('click', imageChange);

function imageChange() {
  myImage.src = "https://cdn.glitch.global/c61c7ecd-c992-456b-8136-a7497de5a768/nycimage.png?v=1711325220939";
}
