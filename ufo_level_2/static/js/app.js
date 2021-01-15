// from data.js
var tableData = data;

// YOUR CODE HERE!
// Clearing Data
var tbody = d3.select("tbody");

//get button and input references
var button = d3.select("#filter-btn");
var input = d3.select("#datetime");
var inputcity = d3.select("#city");
var inputstate = d3.select("#state");
var inputcountry = d3.select("#country");
var inputshape = d3.select("#shape");

// Creating Fuction, Row and cell

function buildData(data) {
    tbody.html("");
data.forEach((datarow) => {
    var row = tbody.append("tr");
    Object.values(datarow).forEach((value) =>{
    var cell = row.append("td");
    cell.text(value);
    });
    
});

}

// Creating function to retrieve data on click
function handleclick() {
    var date = d3.select("#datetime").property("value");
    var filterdata = tableData;
    if(date) {
        filterdata = filterdata.filter(row => row.datetime === date);
    }
    buildData(filterdata);

}
d3.selectAll("#filter-btn").on("click",handleclick);

buildData(tableData);

