$(document).ready(function() {



		$('.owl-demo').owlCarousel({

			autoPlay: 3000,

			items : 3,
			itemsDesktop : [1199,3],
			itemsDesktopSmall : [979,3]
		});


		function initMap() {
  			var uluru = {lat: -33.2941162, lng: -70.7344123};
 			 var map = new google.maps.Map(document.getElementById('map'), {
   			 zoom: 14,
   			 center: uluru
  			});

  		var marker = new google.maps.Marker({
   		 position: uluru,
   		 map: map

  		});
		}

		$('.vide').vide({

			volume: 1,
			playbackRate: 1,
			muted: true,
			loop: true,
			autoplay: true,


		});


		$('.comentarios').on('click', '.likeable', function(){
		$(this).siblings('.likep').html(parseInt($(this).siblings('.likep').html()) + 1)
		});

});

