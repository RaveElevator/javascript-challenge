// from data.js
var tableData = data;
var tbody = d3.select("tbody");
 
console.log(data);

// YOUR CODE HERE!
// Here, start with a blank array GJM
tbody.html("")
tableData.forEach((UFOReport) => {
 console.log(UFOReport)
 var newRow = tbody.append('tr')
  
 Object.values(UFOReport).forEach((pair) => {      
   var cell = newRow.append('td').text(pair);
 })
});
// event listener button change click gjm


//define button d3 select class
// use example #day #3 #09 blood type
// use d3 to pick form where data is entered

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");


  console.log(inputValue);

  var filteredData = tableData.filter(did => did.datetime === inputValue);
  tbody.html("")
  filteredData.forEach((UFOReport) => {
   console.log(UFOReport)
   var newRow = tbody.append('tr')
  
   Object.values(UFOReport).forEach((pair) => {      
   var cell = newRow.append('td').text(pair);
 })
});
  console.log(filteredData);
})