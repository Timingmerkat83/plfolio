function openBootstrapModal(img) {
    var modalImage = document.getElementById("modal-image");
    
    // Set the modal image source to the clicked image's source
    modalImage.src = img.src;
    
    // Open the modal
    $('#imageModal').modal('show');
  }

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

document.addEventListener('DOMContentLoaded', function () {
    const tooltips = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(tooltips);
  });