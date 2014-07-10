document.addEventListener('DOMContentLoaded', function(){

	

	var button = document.getElementById("buttonAtras")
	var iframe = document.getElementById("todoIframe")
	var dir = 'http://todo-super.herokuapp.com/'

	button.addEventListener('click', function(e) {
		console.log(iframe)
		iframe.setAttribute('src', dir)
	})

	$('#iframeChat').on('load', function() {
		console.log('lol')
		$('.waitMessage').animate({
				top: "-100px"
			},
			{
				duration: 500				
			})
	})

})

