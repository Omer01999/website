// Kullanıcı giriş/çıkış işlemleri
document.addEventListener('DOMContentLoaded', function() {
    checkAuthStatus();
});

function checkAuthStatus() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const authLinks = document.getElementById('authLinks');
    const profileLink = document.getElementById('profileLink');
    const mobileLoginLink = document.getElementById('mobileLoginLink');
    const mobileRegisterLink = document.getElementById('mobileRegisterLink');
    const mobileProfileLink = document.getElementById('mobileProfileLink');
    const mobileLogoutLink = document.getElementById('mobileLogoutLink');

    if (currentUser) {
        if (authLinks) authLinks.style.display = 'none';
        if (profileLink) {
            profileLink.style.display = 'block';
            document.getElementById('usernameDisplay').textContent = currentUser.username;
        }
        if (mobileLoginLink) mobileLoginLink.style.display = 'none';
        if (mobileRegisterLink) mobileRegisterLink.style.display = 'none';
        if (mobileProfileLink) mobileProfileLink.style.display = 'block';
        if (mobileLogoutLink) mobileLogoutLink.style.display = 'block';
    } else {
        if (authLinks) authLinks.style.display = 'block';
        if (profileLink) profileLink.style.display = 'none';
        if (mobileLoginLink) mobileLoginLink.style.display = 'block';
        if (mobileRegisterLink) mobileRegisterLink.style.display = 'block';
        if (mobileProfileLink) mobileProfileLink.style.display = 'none';
        if (mobileLogoutLink) mobileLogoutLink.style.display = 'none';
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}