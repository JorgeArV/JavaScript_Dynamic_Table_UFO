// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

var form = d3.select("form");

// Get a reference to the table body
var tbody = d3.select("tbody");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Erase data from prior search
    tbody.html(" ");

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
 
    // Test to ensure variables are correct
    console.log(inputValue);
    console.log(tableData);

    // Filter data based on input

    var filteredData = tableData.filter(written_date => written_date.datetime === inputValue);

    // Test to ensure variables are correct
    console.log(filteredData);

    //Use d3 & arrow function to create table rows and include values form data set

    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });


}
  
 //   var filteredData = people.filter(person => person.bloodType === inputValue);
  
 //   console.log(filteredData)