// from data.js
var tableData = data;
var tbody = d3.select("tbody");

console.log(data);

// YOUR CODE HERE!
// Here, start with a blank array GJM
// var UFOArray = ["date/time", "city", "state", "country", "shape", "comment"];

data.forEach((UFOReport) => {
 console.log(UFOReport)
 var newRow = tbody.append('ufo-table')
  
 Object.entries(UFOReport).forEach((pair) => {
 var newRow = tbody.append('ufo-table')
      
 var cell = newRow.append('ufo-table').text(value)
 })
});

  
// Display the array in console 
console.log("An array of Info:");
console.log(UFOArray);