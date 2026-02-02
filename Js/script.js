document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // prevent default submission

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

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

            alert("Form submitted successfully!");
            form.reset(); 
        });
    }
});
