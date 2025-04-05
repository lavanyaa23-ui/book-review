document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    // Simulate login authentication (replace with actual logic)
    localStorage.setItem("loggedIn", "true");

    // Redirect to user account page
    window.location.href = "user-account.html";
});