function openBootstrapModal(img) {
    var modalImage = document.getElementById("modal-image");
    
    // Set the modal image source to the clicked image's source
    modalImage.src = img.src;
    
    // Open the modal
    $('#imageModal').modal('show');
  }

  document.addEventListener('DOMContentLoaded', function () {
    const collapsibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles);
  });

  const links = document.querySelectorAll('.collapsible-body li a');
links.forEach(link => {
  link.addEventListener('click', function () {
    links.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

document.querySelector('a[href="#projects"]').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#projects').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });

window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    // Fade out loading screen
    loadingScreen.style.transition = 'opacity 0.5s';
    loadingScreen.style.opacity = '0';

    setTimeout(() => {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block';
    }, 500); // Wait for the fade-out to finish
});


$(function () {
	var filterList = {
		init: function () {
			// MixItUp plugin
			// http://mixitup.io
			$('.portfolio-grid').mixItUp({
				selectors: {
  			  target: '.portfolio',
  			  filter: '.filter'	
  		  },
  		  load: {
    		  filter: 'all' // show app tab on first load
    		}     
			});								
		}
	};
	// Run the show!
	filterList.init();
});	
