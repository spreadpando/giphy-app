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
	let queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=qntGR5Te1E7CLsmv81lfvDLbSeA2HiiO&q=' + query + '&limit=25&offset=0&rating=G&lang=en';
	$.ajax({
		url: queryURL,
		method: 'GET'
	}).then(function (response) {
		let result = response.data;
		for (var i = 0; i < result.length; i++) {
			console.log(result[i].images.fixed_height_still.url);
			var div = $('<div class="gif">');
			var img = $('<img class="gif-image">');
			var still = result[i].images.fixed_height_still.url;
			var anim = result[i].images.fixed_height.url;
			img.attr('data-still', still);
			img.attr('data-anim', anim);
			img.attr('data-state', 'static');
			img.attr('src', still);
			div.prepend(img);
			$('#gifs').prepend(div);
		}


	});

}
$(document).on('click', '.gif-image', function () {
	if ($(this).attr('data-state') == 'animated') {
		$(this).attr('data-state', 'static');
		$(this).attr('src', $(this).attr('data-still'));

	} else if ($(this).attr('data-state') == 'static') {
		$(this).attr('data-state', 'animated');
		$(this).attr('src', $(this).attr('data-anim'));
	};
})

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