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

        // Now that the header is loaded, attach the event listener
        document.getElementById("user-logo").onclick = function() {
            var submenu = document.getElementById("subMenu");
            submenu.classList.toggle('open-menu');
        };
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