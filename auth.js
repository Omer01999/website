// auth.js
document.addEventListener('DOMContentLoaded', function() {
    checkAuthStatus();
});

function checkAuthStatus() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    // Masaüstü elementleri
    const authLinks = document.getElementById('authLinks');
    const profileLink = document.getElementById('profileLink');
    const logoutBtn = document.getElementById('logoutBtn');
    
    // Mobil elementler
    const mobileLoginLink = document.getElementById('mobileLoginLink');
    const mobileProfileLink = document.getElementById('mobileProfileLink');
    const mobileLogoutBtn = document.getElementById('mobileLogoutBtn');

    if (currentUser) {
        // Giriş yapılmışsa
        if (authLinks) authLinks.style.display = 'none';
        if (profileLink) profileLink.style.display = 'block';
        if (logoutBtn) logoutBtn.style.display = 'block';
        if (mobileLoginLink) mobileLoginLink.style.display = 'none';
        if (mobileProfileLink) mobileProfileLink.style.display = 'block';
        if (mobileLogoutBtn) mobileLogoutBtn.style.display = 'block';
    } else {
        // Giriş yapılmamışsa
        if (authLinks) authLinks.style.display = 'block';
        if (profileLink) profileLink.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'none';
        if (mobileLoginLink) mobileLoginLink.style.display = 'block';
        if (mobileProfileLink) mobileProfileLink.style.display = 'none';
        if (mobileLogoutBtn) mobileLogoutBtn.style.display = 'none';
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}