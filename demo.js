// script.js

document.addEventListener("DOMContentLoaded", function () {
    const reviewForm = document.getElementById("reviewForm");

    reviewForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        
        // Check if the user is logged in (assuming a simple check using localStorage)
        const isLoggedIn = localStorage.getItem("loggedIn");

        if (!isLoggedIn) {
            alert("You must be logged in to submit a review. Please login or sign up first.");
        } else {
            alert("Review submitted successfully!");
            reviewForm.reset(); // Clear form fields
        }
    });
});

