// Wait for the DOM to fully load before running any script
document.addEventListener("DOMContentLoaded", function () {

    // Contact Form Submission
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent default form submission (no page reload)

            // Get form values and trim whitespace
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            // Validation: Check if all fields are filled
            if (!name) {
                alert("Please enter your name.");
                return;
            }

            if (!email) {
                alert("Please enter your email.");
                return;
            }

            if (!message) {
                alert("Please enter your message.");
                return;
            }

            // If all fields are valid
            alert("Form submitted successfully!");
            form.reset(); // Clear the form fields
        });
    }
});

// Review Form Functionality
document.addEventListener("DOMContentLoaded", () => {
    const reviewForm = document.getElementById("reviewForm"); // Form element
    const reviewsContainer = document.getElementById("reviewsContainer"); // Container to display reviews

    // Load existing reviews from localStorage when page loads
    loadReviews();

    // Event listener for review form submission
    reviewForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default submission

        // Get values from form fields
        const name = document.getElementById("name").value.trim();
        const rating = document.getElementById("rating").value;
        const comment = document.getElementById("comment").value.trim();

        // Validation flag
        let isValid = true;

        // Validate name
        if (name === "") {
            showError("nameError", "Name is required");
            isValid = false;
        } else {
            hideError("nameError");
        }

        // Validate rating
        if (rating === "") {
            showError("ratingError", "Rating is required");
            isValid = false;
        } else {
            hideError("ratingError");
        }

        // Validate comment
        if (comment === "") {
            showError("commentError", "Comment is required");
            isValid = false;
        } else {
            hideError("commentError");
        }

        // Stop submission if validation fails
        if (!isValid) return;

        // Prepare review object
        const review = { name, rating, comment };

        // Simulate AJAX POST using localStorage
        let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
        reviews.push(review); // Add new review
        localStorage.setItem("reviews", JSON.stringify(reviews)); // Save updated reviews

        // Reset form fields after submission
        reviewForm.reset();

        // Reload reviews dynamically on page
        loadReviews();
    });

    // Show validation error
    function showError(id, msg) {
        const el = document.getElementById(id);
        el.innerText = msg; // Set error message
        el.style.display = "block"; // Make it visible
    }

    // Hide validation error
    function hideError(id) {
        const el = document.getElementById(id);
        el.innerText = ""; // Clear message
        el.style.display = "none"; // Hide element
    }

    // Load and display reviews
    function loadReviews() {
        reviewsContainer.innerHTML = ""; // Clear existing reviews
        const reviews = JSON.parse(localStorage.getItem("reviews")) || []; // Get reviews from localStorage
        if (reviews.length === 0) {
            reviewsContainer.innerHTML = "<p>No reviews yet.</p>"; // Message if no reviews
            return;
        }

        // Loop through reviews and display them
        reviews.forEach((rev, index) => {
            const div = document.createElement("div");
            div.classList.add("review");
            div.innerHTML = `
                <h3>${rev.name} - ${rev.rating} ⭐</h3>
                <p>${rev.comment}</p>
            `;
            reviewsContainer.appendChild(div);
        });
    }
});
