let topics = ['cat', 'dog', 'bird'];
$('#submit-button').on('click', addButton);

function addButton() {
	let newButton = $("#add-button").val().trim();
	topics.push(newButton);
	renderButtons();
	$('#add-button').val('');
}
$(document).on('click', '.btn', addGiphs);

function addGiphs() {
	let query = $(this).attr('data-name');
	console.log(query);
	let queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=qntGR5Te1E7CLsmv81lfvDLbSeA2HiiO&q=' + query + '&limit=25&offset=0&rating=G&lang=en';
	$.ajax({
		url: queryURL,
		method: 'GET'
	}).then(function (response) {
		let result = response.data;
		console.log(result[0].images.fixed_height_still.url);
		for (var i; i < result.length; i++) {
			var div = $('<div class="gif">');
			console.log(div);
			var img = $('<img class="gif-image">');
			var still = result[i].images.fixed_height_still.url;
			var anim = result[i].images.fixed_height.url;
			img.attr('src', still);
			div.append(img);
			$('#gifs').prepend(div);
		}

	});

}

function renderButtons() {
	$('#buttons').html('');
	for (var i in topics) {
		let button = $('<button>');
		button.attr('data-name', topics[i]);
		button.attr('class', 'btn');
		button.text(topics[i]);
		$('#buttons').append(button);

	}
}

renderButtons();