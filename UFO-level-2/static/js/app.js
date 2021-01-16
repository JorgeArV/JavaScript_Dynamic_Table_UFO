// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.selectAll("form");

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

    // Select the input element and get the raw HTML node & Get the value property of each input element
    var inputElement1 = d3.select("#datetime");
    var inputValue1 = inputElement1.property("value");

    var inputElement2 = d3.select("#city");
    var inputValue2 = inputElement2.property("value");

    var inputElement3 = d3.select("#state_selected");
    var inputValue3 = inputElement3.property("value");

    var inputElement4 = d3.select("#country");
    var inputValue4 = inputElement4.property("value");

    var inputElement5 = d3.select("#shape");
    var inputValue5 = inputElement5.property("value");


 
    // Test to ensure variables are correct
    console.log(inputValue1);
    console.log(inputValue2);
    console.log(inputValue3);
    console.log(inputValue4);
    console.log(inputValue5);

    // Filter data: If date is inputted, we assess the next criterion (i.e. city) based on the date-filtered data set. The code will check whether all 5 criteria have been inputted and progressively filter the dataset further and further

    var filteredData1 = tableData.filter(function(written_date){

      if (inputValue1 != "") { return written_date.datetime === inputValue1}

      else {return tableData}
    })

    var filteredData2 = filteredData1.filter(function(written_city){

      if (inputValue2 != "") { return written_city.city === inputValue2}

      else {return filteredData1}
    })

    var filteredData3 = filteredData2.filter(function(written_state){

      if (inputValue3 != "") { return written_state.state === inputValue3}

      else {return filteredData2}
    })

    var filteredData4 = filteredData3.filter(function(written_country){

      if (inputValue4 != "") { return written_country.country === inputValue4}

      else {return filteredData3}
    })

    var filteredData5 = filteredData4.filter(function(written_shape){

      if (inputValue5 != "") { return written_shape.shape === inputValue5}

      else {return filteredData4}
    })
 
    // Test to ensure variables are correct
    console.log(filteredData5);

    //Use d3 & arrow function to create table rows and include values form data set

    filteredData5.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });


}