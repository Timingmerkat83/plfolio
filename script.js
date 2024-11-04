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