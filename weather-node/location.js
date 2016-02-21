function printMessage(location,temp,cond) {
  var message = "It is currently " + cond + " and " + temp + "C in " + location;
  console.log(message);
}

var http = require("http");



// print error messages
function printError(error){
   console.error(error.message)
}

function get(location){
var req = http.get('http://api.worldweatheronline.com/free/v2/ski.ashx?key=351d600863319d91647dc914d7562&q=' + location + '&format=json', function(response){
  var body = "";
  response.on('data', function(chunk) {
    body += chunk;
  });
  response.on('end', function(){
    if(response.statusCode === 200){
    try{
    var weatherStatus = JSON.parse(body);
    var temperature = weatherStatus.data.weather[0].bottom[0].maxtempC;
    var conditions = (weatherStatus.data.weather[0].hourly[0].bottom[0].weatherDesc[0].value).toLowerCase();
    printMessage(location,temperature,conditions);
  } catch(error) {
    //parse error here
    printError(error);
  }
} else {
  //status code error
  printError({message: "There was an error getting the golf weather for" + location + ". (" + http.STATUS_CODES[response.statusCode] + ")"});
}
});
});
req.on("error", printError);
}

module.exports.get = get;