// Function to handle sign out
function signOut() {
    // Redirect to index.html
    window.location.href = 'index.html';
}

// Function to handle side menu
function sideMenu(action) {
    var sideMenu = document.getElementById('side-menu');
    if (action === 0) {
        sideMenu.style.transform = 'translateX(0)';
    } else {
        sideMenu.style.transform = 'translateX(-100%)';
    }
}
