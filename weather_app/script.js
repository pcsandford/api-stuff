$(document).ready(function(){

function sendRequest() {
	var location = $('.location').val();
	var apiKey = '351d600863319d91647dc914d7562';
 $.ajax({
    url: 'http://api.worldweatheronline.com/free/v2/ski.ashx?key=' + apiKey + '&q=' + location + '&format=json',
    type: 'GET',
    dataType: 'jsonp',
    success: searchCallback
});
}

     function searchCallback(data) {
    var temp = data.data.weather[0].bottom[0].maxtempC;
    var chance = data.data.weather[0].chanceofsnow;
    console.log(data);
    $('.temp').text('The current temperature is ' + temp +'C.');
    $('.chance').text('The chance of snow is ' + chance +'%.')
}

$('button').on('click',function(){
	sendRequest();
});
});
