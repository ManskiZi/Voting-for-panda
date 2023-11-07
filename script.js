// Initialize a counter variable with an initial value of 3
let counter = 3;

// Function to increase the counter by 1 and update the displayed votes
const upvote = () => {
  counter += 1; // Increment the counter by 1
  let votes = document.getElementById("votes"); // Get the element with the ID "votes"
  votes.innerHTML = counter + " Votes"; // Update the displayed votes with the new counter value
};

// Function to increase the counter by 10 and update the displayed votes
const upvoteBy10 = () => {
  counter += 10; // Increment the counter by 10
  let votes = document.getElementById("votes"); // Get the element with the ID "votes"
  votes.innerHTML = counter + " Votes"; // Update the displayed votes with the new counter value
};

// Function to decrease the counter by 1, with a minimum value of 0, and update the displayed votes
const downvote = () => {
  counter -= 1; // Decrement the counter by 1
  if (counter <= 0) {
    counter = 0; // Ensure the counter doesn't go below 0
  }
  let votes = document.getElementById("votes"); // Get the element with the ID "votes"
  votes.innerHTML = counter + " Votes"; // Update the displayed votes with the new counter value
};

// Function to decrease the counter by 10, with a minimum value of 0, and update the displayed votes
const downvoteBy10 = () => {
  counter -= 10; // Decrement the counter by 10
  if (counter <= 0) {
    counter = 0; // Ensure the counter doesn't go below 0
  }
  let votes = document.getElementById("votes"); // Get the element with the ID "votes"
  votes.innerHTML = counter + " Votes"; // Update the displayed votes with the new counter value
};
