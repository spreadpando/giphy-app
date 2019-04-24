let topics = ['cat', 'dog', 'bird'];
$('#submit-button').on('click', addButton);

function addButton() {
	let newButton = $("#add-button").val().trim();
	topics.push(newButton);
	renderButtons();
}

function addGiphs(clicked) {
	let query = clicked.class();
	let queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=qntGR5Te1E7CLsmv81lfvDLbSeA2HiiO&q=' + query + '&limit=25&offset=0&rating=G&lang=en';
	$.ajax({
		url: queryURL,
		method: 'GET'
	}).then(function (response) {

	});

}

function renderButtons() {
	$('#buttons').html('');
	for (var i in topics) {
		let button = $('<button>');
		button.addClass('topics[i]');
		button.text(topics[i]);
		$('#buttons').append(button);
		$('.' + topics[i]).on('click', function () {
			addGiphs(this);
		})
	}
}

renderButtons();