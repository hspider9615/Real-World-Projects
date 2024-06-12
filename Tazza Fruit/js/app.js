// Header Scroll
let nav = document.querySelector('.navbar');
window.onscroll = function () {
  if (document.documentElement.scrollTop > 50) {
    nav.classList.add('header-scrolled');
  } else {
    nav.classList.remove('header-scrolled');
  }
};

// nav hide
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function (a) {
  a.addEventListener('click', function () {
    navCollapse.classList.remove('show');
  });
});

// Get the button
let scrollToTopBtn = document.getElementById("scrollToTopBtn");
let copyright = document.getElementById('copyright');

// Function to handle scroll event
window.addEventListener('scroll', function () {
    // Show/hide scroll-to-top button
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }

    // Show/hide footer content
    var scrollPosition = window.innerHeight + window.scrollY;
    var footerPosition = document.getElementById("footer").offsetTop;

    if (scrollPosition >= footerPosition) {
        copyright.style.opacity = '1';
        copyright.style.transform = 'translateY(0)';
    } else {
        copyright.style.opacity = '0';
        copyright.style.transform = 'translateY(100%)';
    }
});

// Scroll to top functionality
scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll
    });
});




/*

// Get the button
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener('scroll', function () {
  var copyright = document.getElementById('copyright');
  var contentHeight = document.querySelector('.cocktails').offsetHeight;
  var scrollPosition = window.innerHeight + window.scrollY;

  if (scrollPosition >= contentHeight) {
    copyright.style.opacity = '1';
    copyright.style.transform = 'translateY(0)';
  } else {
    copyright.style.opacity = '0';
    copyright.style.transform = 'translateY(100%)';
  }

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll
    });
});

*/