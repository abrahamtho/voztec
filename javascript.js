
// Nav SlideShow

document.addEventListener("DOMContentLoaded", function () {
    const navSlides = document.querySelectorAll('.nav-slide');
    const sideSlides = document.querySelectorAll('.side-slide');
    
    let currentNavSlide = 0;
    let currentSideSlide = 0;

    function showNavSlide(index) {
        navSlides.forEach((slide, i) => {
            slide.style.opacity = i === index ? '1' : '0';
        });
    }

    function showSideSlide(index) {
        sideSlides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextNavSlide() {
        currentNavSlide = (currentNavSlide + 1) % navSlides.length;
        showNavSlide(currentNavSlide);
    }

    function nextSideSlide() {
        currentSideSlide = (currentSideSlide + 1) % sideSlides.length;
        showSideSlide(currentSideSlide);
    }

    // Initial setup
    showNavSlide(currentNavSlide);
    showSideSlide(currentSideSlide);

    // Auto slide change for nav slides
    setInterval(nextNavSlide, 3000);

    // Auto slide change for side slides
    setInterval(nextSideSlide, 3000);
});




document.addEventListener('DOMContentLoaded', function () {
    // Get necessary elements
    const menuToggle = document.querySelector('.menu-toggle');
    const sideNav = document.querySelector('#side-nav ul');
  
    // Toggle the navigation menu when clicking the menu icon
    menuToggle.addEventListener('click', function () {
      sideNav.classList.toggle('show');
    });
  });
  






/* Right Side Slideshow */

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.side-slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Initial setup
    showSlide(currentSlide);

    // Auto slide change (you can customize the interval)
    setInterval(nextSlide, 3000);
});


