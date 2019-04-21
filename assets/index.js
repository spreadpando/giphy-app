let topic = ['cat', 'dog', 'bird'];
let query = $("#add - button").val().trim();
let queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=qntGR5Te1E7CLsmv81lfvDLbSeA2HiiO&q=' + query + '&limit=25&offset=0&rating=G&lang=en';
$.ajax({
	url: queryURL,
	method: 'GET'
}).then(function (response) {

});