$(document).ready(function() {
  // --- Hamburger Menu Toggle ---
  $('.hamburger').on('click', function() {
      $('.nav-links').toggleClass('active');
  });

  // --- jQuery On-Page Search Functionality ---
  $('#searchInput, #mobileSearchInput').on('keyup', function() {
      var value = $(this).val().toLowerCase();
      // Searches within elements that have the 'searchable' class
      $('.searchable').filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
  });

  // --- Simulated Visitor Counter using LocalStorage ---
  function updateVisitorCounter() {
      let count = localStorage.getItem('visitorCount');
      if (!count) {
          count = 1042; // Starting with a base number for aesthetics
      } else {
          count = parseInt(count) + 1;
      }
      localStorage.setItem('visitorCount', count);
      $('#visitorCountDisplay').text(count);
  }
  
  // Call it on page load
  updateVisitorCounter();
});

// --- Dynamic CAPTCHA logic for Registerpage ---
let currentCaptchaAnswer = 0;

function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    currentCaptchaAnswer = num1 + num2;
    
    const captchaQuestion = document.getElementById('captchaQuestion');
    if (captchaQuestion) {
        captchaQuestion.textContent = `What is ${num1} + ${num2}?`;
    }
}

// Initialize CAPTCHA when the DOM is fully loaded
$(document).ready(function() {
    generateCaptcha();

    // --- Booking Page CAPTCHA ---
    generateBookingCaptcha();
});

function validateForm(event) {
    event.preventDefault();
    const captchaInput = parseInt(document.getElementById('captcha').value, 10);
    
    if (captchaInput !== currentCaptchaAnswer) {
        alert('Incorrect CAPTCHA answer. Please try again.');
        document.getElementById('captcha').value = '';
        generateCaptcha(); // Refresh CAPTCHA on failure
        return false;
    }
    
    alert('Registration Successful!');
    event.target.reset();
    generateCaptcha(); // Refresh CAPTCHA for next time
    return true;
}

// --- Dynamic CAPTCHA logic for Bookingpage ---
let currentBookingCaptchaAnswer = 0;

function generateBookingCaptcha() {
    const captchaEl = document.getElementById('bookingCaptchaQuestion');
    if (!captchaEl) return; // only run on booking page
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    currentBookingCaptchaAnswer = num1 + num2;
    captchaEl.textContent = `What is ${num1} + ${num2}?`;
}

function validateBookingForm(event) {
    event.preventDefault();
    const captchaInput = parseInt(document.getElementById('bookingCaptcha').value, 10);

    if (captchaInput !== currentBookingCaptchaAnswer) {
        alert('Incorrect CAPTCHA answer. Please try again.');
        document.getElementById('bookingCaptcha').value = '';
        generateBookingCaptcha();
        return false;
    }

    alert('Booking Request Submitted! We will contact you shortly to confirm.');
    event.target.reset();
    generateBookingCaptcha();
    return true;
}
