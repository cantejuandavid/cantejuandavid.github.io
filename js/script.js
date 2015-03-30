$(document).ready(function() {
	animateSkills()
})

var animateSkills = function() {
	var second = 0
	var limit = 20
	setInterval(function(){
		if(second <= limit) {
			$('.second').text(second++)	
			$('.second').hide()
			$('.second').fadeIn()			
			$.each($('progress'), function(index, value){			
				var msecsPerUpdate = 1000/60 
				var progress =  $(value)
				var duration = 1             
				var interval = progress.attr('max')/(duration*1000/msecsPerUpdate)
				var limite = progress.attr('data-skill')

				var animator = function() {
					progress.val(progress.val() + interval)
					if (progress.val() + interval < limite){						
						setTimeout(animator, msecsPerUpdate)
					}
					else
						progress.val(limite);
				}
				animator()
			})		
		}
		else{
			second = 0
			$('.second').text(second)	
			$.each($('progress'), function(){
				$(this).val(0)
			})			
		}
	}, 1000);
}


