// Open up your console to use throughout the exercise to check if things are working

console.log("Hello world");



// PART A: 


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
// (Tip: this is )

// 2. Inside of your function, add one more line that makes the color of the title change on click as well

// 3. 

let titleText = document.querySelector('h1');
titleText.addEventListener('click', myFunction);

function myFunction() {
     titleText.innerHTML = "Third title";
     titleText.style.color = "orange";
}