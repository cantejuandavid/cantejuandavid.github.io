document.addEventListener('DOMContentLoaded', function(){

	
	var button = document.getElementById("buttonAtras")
	var iframe = document.getElementById("todoIframe")
	var dir = 'http://todo-super.herokuapp.com/'

	button.addEventListener('click', function(e) {
		console.log(iframe)
		iframe.setAttribute('src', dir)
	})

})

