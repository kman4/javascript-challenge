// from data.js
var tableData = data;
var tbody = d3.select("tbody");


// loop through list of objects in data.js and return value for each key 
tableData.forEach((sighting)=>{
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key,value])=>{
        var cell = row.append("td");
        cell.text(value);
    });
});



//get button and input references
var button = d3.select("#filter-btn");
var input = d3.select("#datetime");
var inputcity = d3.select("#city");
var inputstate = d3.select("#state");
var inputcountry = d3.select("#country");
var inputshape = d3.select("#shape");

//create funcition that clears the tbody and will create table with data filtered by datetime
function searchDate(file) {
    tbody.html("");
    file.forEach((sighting)=>{
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key,value])=>{
            var cell = row.append("td");
            cell.text(value);
        });
    });

}

//write function for click event filerting through each search parameter
button.on("click", function() {
    var date = input.property("value");
    var city = inputcity.property("value").toLowerCase();
    var state = inputstate.property("value").toLowerCase();
    var country = inputcountry.property("value").toLowerCase();
    var shape = inputshape.property("value").toLowerCase();
    var filteredUFO = tableData.filter(saucer => {
        if (date === ""){ return saucer.datetime === saucer.datetime;}
        else { return saucer.datetime === date;}
    });
    var filteredCity = filteredUFO.filter(saucer => {
        if (city === ""){ return saucer.city === saucer.city;}
        else { return saucer.city === city;}
    });
    var filteredState = filteredCity.filter(saucer => {
        if (state === ""){ return saucer.state === saucer.state;}
        else { return saucer.state === state;}
    });
    var filteredCountry = filteredState.filter(saucer => {
        if (country === ""){ return saucer.country === saucer.country;}
        else { return saucer.country === country;}
    });
    var filteredShape = filteredCountry.filter(saucer => {
        if (shape === ""){ return saucer.shape === saucer.shape;}
        else { return saucer.shape === shape;}
    });
    searchDate(filteredShape);

    console.log(date, city, state, country, shape);

});





