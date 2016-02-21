var locationFile = require("./location.js");

var locations = process.argv.slice(2);


// using an array for inputs
// var locations = ['Edinburgh', 'Toronto', 'London', 'Tokyo'];

locations.forEach(locationFile.get);


