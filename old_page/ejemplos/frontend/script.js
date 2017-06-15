$(document).ready(function() {
	
	tienda()
	reproductor()
})

function alerta(text, color) {
	$('.alert').css('color',color)
	$('.alert').html(text)
}

function tienda() {
	var elementDragged = null
	var oro = 40

	var items = document.querySelectorAll('.shop>.item')

	Array.prototype.forEach.call(items, function(item, i){
		item.addEventListener('dragstart', function(e){
			var item = e.target.parentNode		
			var alert = 'Estas a punto de comprar <strong>'+
						item.getAttribute('data-name')+
						'</strong> por <strong>'
						+item.getAttribute('data-oro')+'</strong> oros'
			alerta(alert,'#FFBF48')
			e.dataTransfer.effectAllowed = 'move';	
			e.dataTransfer.setData('item', e.target.parentNode.outerHTML)
			elementDragged = this;	

		})
		item.addEventListener('dragend', function(){
			elementDragged = null
		})
	});

	var inventario = document.querySelector('.inventario')

	inventario.addEventListener('drop', function(e) {
		e.preventDefault()		
		var costo = $(e.dataTransfer.getData('item')).attr('data-oro')
		var nameItem = $(e.dataTransfer.getData('item')).attr('data-name')

		if (costo <= oro) {
			oro = oro - costo
			$('.oro').text(oro)
			$(e.target).append(e.dataTransfer.getData('item'))
			$('.inventario').css('background','#fafafa')	
			if(elementDragged){
				document.querySelector('.shop').removeChild(elementDragged);
			}
			elementDragged = null;
			e.stopPropagation
			alerta("Haz comprado por <strong>"+costo+"</strong> oros <strong>"+nameItem+"</strong>",'#11FF11')			
		}
		else {
			alerta('No tiene suficiente <strong>oro</strong>', 'red')			
		}
	})
	inventario.addEventListener('dragover', function(e){
		e.preventDefault()
		e.dataTransfer.dropEffect = 'move'
	})
}

function reproductor () {

	var songs = document.querySelectorAll('ul>li.song')
	var audio = document.getElementsByTagName("audio")[0]	
	var video = document.getElementById("video")	

	Array.prototype.forEach.call(songs, function(el, i){	

		el.querySelectorAll(".iconPP")[0].addEventListener('click', function(e) {
			var button = e.target
			var list = el.parentNode
			
			$(list).find('.playing').removeClass('playing')
			$(button).addClass('playing')	
			$(list).find('.iconPP').text('>')
			if($(el.parentNode).find('.playing').hasClass('playing'))
				$(button).text('||')

			var type = el.getAttribute('data-type')

			if (type == 'song') {
				video.pause()
				video.style.display = "none"								
				audio.style.display = "block"

				var song = el.getAttribute('data-id')
				audio.src = 'songs/'+ song + '.mp3'
				audio.load()		
				audio.play()				
			}	
			else {				
				audio.pause()
				audio.style.display="none"										
				video.style.display="block"

				var id = el.getAttribute('data-id')							
				var source = document.getElementsByTagName('source')[0]	
				source.src = 'songs/'+id+'.mp4'	
				video.load()		
				video.play()		
			}		
		})

	});	
}