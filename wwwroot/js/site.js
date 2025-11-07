// Silk Smooth Loading Animation - ONLY on cold starts (2 seconds)
document.addEventListener('DOMContentLoaded', function () {
    const loadingScreen = document.getElementById('loading-screen');

    if (!loadingScreen) return; // Exit if no loading screen found

    console.log('Loading screen detected - checking navigation type...');

    // Method 1: Use Navigation Timing API
    const navEntries = performance.getEntriesByType('navigation');
    if (navEntries.length > 0) {
        const navigation = navEntries[0];
        console.log('Navigation type:', navigation.type);

        // Only show for 'navigate' (cold starts), not for 'reload', 'back_forward'
        if (navigation.type === 'navigate') {
            showLoadingAnimation(loadingScreen);
        } else {
            hideLoadingImmediately(loadingScreen);
        }
    }
    // Method 2: Fallback - check referrer
    else {
        const referrer = document.referrer;
        const isExternal = !referrer || !referrer.includes(window.location.hostname);
        console.log('Referrer:', referrer, 'Is external:', isExternal);

        if (isExternal) {
            showLoadingAnimation(loadingScreen);
        } else {
            hideLoadingImmediately(loadingScreen);
        }
    }
});

function showLoadingAnimation(loadingScreen) {
    console.log('Showing loading animation (cold start)');
    setTimeout(function () {
        loadingScreen.classList.add('fade-out');
        console.log('Starting fade out');

        setTimeout(function () {
            loadingScreen.remove();
            console.log('Loading screen removed');
        }, 1000);
    }, 2000); // 2 seconds only
}

function hideLoadingImmediately(loadingScreen) {
    console.log('Hiding loading immediately (internal navigation)');
    loadingScreen.remove();
}