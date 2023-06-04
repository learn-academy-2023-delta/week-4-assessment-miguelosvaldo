// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("removeFirstItem", () => {
  it("removes the first item from the array and shuffles the remaining content", () => {
const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
  
  const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
expect(removeFirstItem(colors1)).toEqual(expect.arrayContaining(colors1))
expect(removeFirstItem(colors2)).toEqual(expect.arrayContaining(colors2))
  })
})
//FIRST TEST =   ReferenceError: removeFirstItem is not defined

//SECOND TEST = 
const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
  
  const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
// b) Create the function that makes the test pass.


const removeFirstItem = (array) => {
  array.shift()
  return array.sort(() => Math.random() - 1/3)
}

console.log(removeFirstItem(colors1))


// Pseudo code:
        //Create a function called removeFirstItem that has one parameter
        //Going to remove first item from array by using .shift() 
        //Going to .sort with Math.random to randomize the rest of the array

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

describe("endTally", () => {
  it("returns the end tally", () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    // Expected output: 11
    expect(endTally(votes1)).toEqual((11))  
    const votes2 = { upVotes: 2, downVotes: 33 }
    // Expected output: -31
    
    expect(endTally(votes2)).toEqual((-31))

  })
}) 
        //FIRST test = ReferenceError: endTally is not defined
        //SECOND test = Passed

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.

const endTally = (tally) => {
  return tally.upVotes - tally.downVotes
}

// Pseudo code:
        //create function called endTally
        //use dot notation to access the value of the key
        //return the difference of upVotes and downVotes

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("noDouble", () => {
  it("returns one array with no duplicate values.", () => {

    const dataTypey1sArra = ["array", "object", "number", "string", "Boolean"]
    const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
    // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
expect(noDouble(dataTypey1sArra, dataTypesArray2)).toEqual((["array", "object", "number", "string", "Boolean", "null", "undefined"]))

  })
}) 
        //FIRST test = ReferenceError: noDouble is not defined
        //SECOND test = passed
const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.

const noDouble = (firstArr, secondArr) => {
  let concatedArray = firstArr.concat(secondArr)
   return concatedArray.filter((value, index, array) => {
    return typeof value  && array.indexOf(value) === index
  })
}

// Pseudo code:
        //create function noDouble that takes in two paramaters that arrays
        //concat both arrays using .concat() method
        //use HOF filter to filter out similar values
        //use indexOf() to indentify any duplicates and discard them
        //return array with no duplicates