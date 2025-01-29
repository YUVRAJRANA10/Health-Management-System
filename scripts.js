// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const profileIcon = document.getElementById('profileIcon');
    const profileModal = document.getElementById('profileModal');
    const closeModal = document.getElementsByClassName('close')[0];

    profileIcon.onclick = function() {
        profileModal.style.display = 'block';
    };

    closeModal.onclick = function() {
        profileModal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == profileModal) {
            profileModal.style.display = 'none';
        }
    };
});
