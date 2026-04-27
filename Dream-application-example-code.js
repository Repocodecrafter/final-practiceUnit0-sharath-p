/*---------------------------------------------
PSEUDOCODE:
1. Store user messages and suggestions
2. Process a user input
3. Check conditions for safe responses
4. Store data in arrays
5. Loop through suggestions and display them
----------------------------------------------------*/


// ------------------------------------------------------------------------------------------------------
// Values, Data Types, Operations (Using variables, strings, and operations to process user input)

let userInput = "I am confused about my career";
let messageLength = userInput.length; // operation using .length

console.log("User input:", userInput);
console.log("Message length:", messageLength);


// ----------------------------------------------------------------------------------------------------
// Stringing Characters Together (Using strings to create AI response messages)

let response = "AI Mentor: I understand your concern. Let's break it down step by step.";
console.log(response);


// -------------------------------------------------------------------------------------------------------
//  Control Structures and Logic (Using if-else to decide response type)


if (userInput.includes("confused")) {
  console.log("AI: You seem confused. Here are some clear steps to help you.");
} else {
  console.log("AI: Let's continue normally.");
}


//--------------------------------------------------------------------------------------------------------------
// Building Arrays(Creating arrays to store suggestions)

let suggestions = [
  "Break problem into small steps",
  "Make a daily plan",
  "Focus on one goal at a time"
];

console.log("Suggestions stored:", suggestions);


// ------------------------------------------------------------------------------------------------------------
// Using Arrays ( methods like push and index access)

suggestions.push("Ask for guidance from mentors"); // add new suggestion

console.log("First suggestion:", suggestions[0]);
console.log("Updated suggestions:", suggestions);


//----------------------------------------------------------------------------------------------------------------
// Working With Loops(Looping through array to display all suggestions)

console.log("All Suggestions:");

for (let i = 0; i < suggestions.length; i++) {
  console.log(i + 1 + ".", suggestions[i]);
}