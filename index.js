window.onload = function() {
    // Check if the key 'firstTimeVisit' exists in session storage
    if (!sessionStorage.getItem('firstTimeVisit')) {
        // User is visiting for the first time in this session
        document.getElementById('popup').style.display = 'block';
        
        // Set the flag in session storage so the pop-up doesn't show again during this session
        sessionStorage.setItem('firstTimeVisit', 'true');
    }

    // Close button functionality for the pop-up
    document.querySelector('.close-btn').onclick = function() {
        document.getElementById('popup').style.display = 'none';
    }

    //button for redirecting new user to selection page
    document.getElementById('offer_button').onclick = function(){
        window.location.href = './sign_up.html';
    }
}
