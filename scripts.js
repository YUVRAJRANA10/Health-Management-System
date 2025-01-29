// ...existing code...

document.addEventListener('DOMContentLoaded', () => {
    const profileIcon = document.getElementById('profileIcon');
    const profileModal = document.getElementById('profileModal');
    const closeModal = document.getElementsByClassName('close')[0];
    const loginForm = document.getElementById('loginForm');
    const healthDataForm = document.getElementById('healthDataForm');
    const profileData = document.getElementById('profileData');
    const loginBtn = document.getElementById('loginBtn');
    const submitHealthDataBtn = document.getElementById('submitHealthDataBtn');

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

    loginBtn.onclick = function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // For simplicity, assume login is always successful
        if (username && password) {
            loginForm.style.display = 'none';
            healthDataForm.style.display = 'block';
        }
    };

    submitHealthDataBtn.onclick = function() {
        const age = document.getElementById('age').value;
        const bloodGroup = document.getElementById('bloodGroup').value;
        const gender = document.getElementById('gender').value;
        const majorHealthIssue = document.getElementById('majorHealthIssue').value;
        const height = document.getElementById('height').value;
        const weight = document.getElementById('weight').value;

        // Save data to local storage (for simplicity)
        localStorage.setItem('profileData', JSON.stringify({
            username: document.getElementById('username').value,
            age,
            bloodGroup,
            gender,
            majorHealthIssue,
            height,
            weight
        }));

        healthDataForm.style.display = 'none';
        displayProfileData();
    };

    function displayProfileData() {
        const data = JSON.parse(localStorage.getItem('profileData'));
        if (data) {
            document.getElementById('profileUsername').innerText = `Username: ${data.username}`;
            document.getElementById('profileAge').innerText = `Age: ${data.age}`;
            document.getElementById('profileBloodGroup').innerText = `Blood Group: ${data.bloodGroup}`;
            document.getElementById('profileGender').innerText = `Gender: ${data.gender}`;
            document.getElementById('profileMajorHealthIssue').innerText = `Major Health Issue: ${data.majorHealthIssue}`;
            document.getElementById('profileHeight').innerText = `Height: ${data.height}`;
            document.getElementById('profileWeight').innerText = `Weight: ${data.weight}`;
            profileData.style.display = 'block';
        }
    }

    // Display profile data if already logged in
    if (localStorage.getItem('profileData')) {
        loginForm.style.display = 'none';
        healthDataForm.style.display = 'none';
        displayProfileData();
    }
     // Initialize carousel with interval
     $('.carousel').carousel({
        interval: 2000 // Slide every 2 seconds
    });
});
