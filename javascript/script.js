// JavaScript Fundamentals Practice Assignment

// 1. Add a new property to the instructor object

let instructor = {
    name: "John Doe",
    age: 35,
    languages: ["JavaScript", "Python", "C++"]
};

instructor.education = "PhD";

console.log(instructor.education)
document.getElementById("instructor-info").innerText = 
    `Instructor new property - Education: ${instructor.education}`;

// 2. Create a function that filters topics array to only show topics with more than 5 characters
let topics = ["Variables", "Strings", "Arrays", "Objects", "Loops", "Functions"];

function filterTopics(arr, size) {
    return arr.filter(elem => elem.length > size);
}

console.log(filterTopics(topics, 5));

// 3. Use a while loop to simulate a simple quiz game
let state = true;
const answer = 'london';

while (state) {
    let userInput = prompt("What is the capital of the UK?");
    if (userInput.toLowerCase() !== answer) {
        alert("That is incorrect! Try again.");
    } else {
        alert("That is correct! Quiz complete.");
        state = false;
    }
}

// 4. Implement a switch statement to provide different messages based on the number of topics
let numTopics = topics.length;

switch (numTopics) {
  case 0:
    console.log("zero topics");
    break;
  case 1:
    console.log("one topic");
    break;
  case 2:
    console.log("two topics");
    break;
  case 3:
    console.log("three topics");
    break;
  default:
    console.log("There are multiple topics");
}

// 5. Use the ternary operator to assign a difficulty level to the course
let diffChoice = prompt("Choose difficulty level from 1 to 10.")
let difficulty = (Number(diffChoice) > 5) ? "Hard": "Easy"; // realistically here I would add more validation test like checking for isNaN or negative values too

console.log("You chose:", difficulty);