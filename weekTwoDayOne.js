// 1. You are given the following "car" object:
// let myCar = {brand: "Toyota", make: "Prius", color: "red"}. 
// Please use destructuring to access the color property.

let myCar = {brand: "Toyota", make: "Prius", color: "red"}
const {color} = myCar;


// 2. Write a function that converts hours into seconds. 
// Return the result. Invoke the function.

function convertHoursToSeconds(hours) {
  const seconds = hours * 3600;
  return seconds
}
const hoursAsSeconds = convertHoursToSeconds(2)
console.log(hoursAsSeconds)


//3. Practice making entity relationship diagrams by building one for 
// a pet store, either on paper or on a website such as draw.io. 
// Include a table for pets, owners, and services.

// see weekTwoDayOne folder 