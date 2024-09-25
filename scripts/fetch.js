document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed(".text", {
        strings: ["Fullstack Developer", "Gamer", "Tech Hustler"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});

// Fetch and inject the header
fetch('header.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('header').innerHTML = html;
        console.log("Header loaded successfully");

        // Now you can still add any event listeners for elements that exist
        const hamburger = document.getElementById("hamburger");
        const navigation = document.querySelector('.navigation');

        // Add event listener for the hamburger menu toggle
        if (hamburger && navigation) {
            hamburger.addEventListener('click', function () {
                hamburger.classList.toggle('active');
                navigation.classList.toggle('active');
            });
        } else {
            console.error('Hamburger or navigation element not found.');
        }
    })
    .catch(error => console.error('Error loading the header:', error));

// Fetch and inject the footer
fetch('footer.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('footer').innerHTML = html;
        console.log('Footer loaded successfully');
    })
    .catch(error => {
        console.error('Error loading the footer:', error);
    });