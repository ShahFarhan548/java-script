// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
function logDairy() {
    for (var items of dairy) {
        console.log(items);
    }
}

logDairy();

// Task 2

function birdCan() {
    const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

   for (let value of Object.keys(bird)) {
         console.log(`${value}: ${bird[value]}`)
    }
     
}

birdCan();

// Task 3

  function animalCan() {
   const animal = {
    canJump: true
  };
  
  const bird = Object.create(animal);
  bird.canFly = true;
  bird.hasFeathers = true;
  
      for (const prop in bird) {
          console.log(`${prop}: ${bird[prop]}`);
      }
  }
  
  animalCan();
  


//   Lab Instructions: Advanced JS Features
// Tips: Before you Begin
// To view your code and instructions side-by-side, select the following in your VSCode toolbar:
// View -> Editor Layout -> Two Columns
// To view this file in Preview mode, right click on this README.md file and Open Preview
// Select your code file in the code tree, which will open it up in a new VSCode tab.
// Drag your assessment code files over to the second column.
// Great work! You can now see instructions and code at the same time.
// Questions about using VSCode? Please see our support resources here:
// Visual Studio Code on Coursera
// To run your JavaScript code
// Select your JavaScript file
// Select the "Run Code" button in the upper right hand toolbar of VSCode.
// Ex: It looks like a triangular "Play" button.


// Task: Iterate Over an Array
// In this exercise, you'll use the for....of loop to iterate over an array and to iterate over an object's own properties.


// Step 1. You are given an array of dairy products:

// var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
// Create a function called logDairy. Within it, console log each of the items in the dairy array, using the for...of loop.

// After you create this function, call it as logDairy() to see the output on the console.

// The expected output should be:

// cheese
// sour cream
// milk
// yogurt
// ice cream
// milkshake

// Step 2. You are given the following starter code:
// const animal = {

// canJump: true

// };

// const bird = Object.create(animal);

// bird.canFly = true;

// bird.hasFeathers = true;
// Create a function called birdCan, within it, loop over the bird object's properties and console log each one, using the for...of loop. Finally call the function as birdCan() to see the output on the console. Remember, you need to console log both the key and the value of each of the bird object's properties.


// Expected output should be:
// canFly: true
// hasFeathers: true

// Step 3. Using the same starter code as in task 2, create a function called `animalCan` and within it, loop over all the properties in both the bird object and its prototype - the animal object - using the for...in loop. Finally call the function as `animalCan()` to see the output on the console.


// Expected outout should be:

// canFly: true
// hasFeathers: true
// canJump: true



// Final Step: Let's submit your code!
// Nice work! To complete this assessment:

// Save your file through File -> Save
// Select "Submit Assignment" in your Lab toolbar.
// Your code will be autograded and return feedback shortly on the "Grades" tab.
// You can also see your score in your Programming Assignment "My Submission" tab.
