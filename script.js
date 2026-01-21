// Inbuilt Methods
// All methods are functions but not all functions are methods.
// A method is a function that is a property of an object.

// string methods
// length: returns the length of a string, this is a property, not a method. differentiated by the abscence of parenthses
let str = "The quick brown fox";
console.log(str);
console.log(`Length of string is: ${str.length}`); // Output: 19

// toUpperCase(): converts string to uppercase
console.log("Converted to uppercase:", str.toUpperCase()); // output: "THE QUICK BROWN FOX"

// toLowerCase(): converts string to lowercase
console.log("Converted to lowercase:", str.toLowerCase()); // output: "the quick brown fox"

// charAt(): returns the character at the specified index
console.log(`Character at index 7: ${str.charAt(7)}`); // Output: "b"

// indexOf(): returns the index of the first occurence of a specified value
console.log(`Index of 'brown': ${str.indexOf("brown")}`); // Output: 10, outputs -1 if not found

console.log(str.toLowerCase().indexOf("the"));

// slice(): extracts a portion of a string and returns it as a string
console.log(`extract the word brown from the string: ${str.slice(10, 16)}`);

// split(): splits a string into an array of substrings.
// join(): joins all the elements of an array into a string

let fruits = "apples, bananas, cherries";
let splitFruitArray = fruits.split(",");
let joinedFruitArray = splitFruitArray.join(" ");
console.log(fruits);
console.log(splitFruitArray);
console.log(joinedFruitArray);

// Classwork
// a user inputs their full name in lowercase. write a program to convert the first letter of each name to uppercase and display the full name to in titlecase

// raw eng
// collect name
// convert to uppercase
// target the char at index 1 to convert to uppercase
// keep the character after index 1
// concatenate the entire thing

let fullName = prompt("Enter your full name, seperated with a space");
let splitNames = fullName.split(" ");
let firstName = splitNames[0];
let lastName = splitNames[1];
let modifiedFullName;

if (firstName != NaN && lastName != NaN) {
  let modifiedFirstName =
    firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  let modifiedLastName =
    lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
  modifiedFullName = `Full name is: ${modifiedFirstName} ${modifiedLastName}`;
  alert(modifiedFullName);
} else {
  alert("There's issues w your name.");
}
