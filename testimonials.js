// testimonials.js

// Function to display testimonials one at a time
function showTestimonials() {
    const testimonials = document.querySelectorAll('.testimonial');
    
    // Hide all testimonials initially
    testimonials.forEach(testimonial => {
        testimonial.style.display = 'none';
    });

    let currentIndex = 0;

    // Show testimonials one at a time with a delay
    function displayTestimonial() {
        testimonials[currentIndex].style.display = 'block';

        // Hide the previous testimonial
        if (currentIndex > 0) {
            testimonials[currentIndex - 1].style.display = 'none';
        }

        currentIndex++;

        // Reset the index to show the first testimonial after reaching the end
        if (currentIndex === testimonials.length) {
            currentIndex = 0;
        }

        // Change testimonials every 5 seconds (adjust as needed)
        setTimeout(displayTestimonial, 5000);
    }

    // Start displaying testimonials
    displayTestimonial();
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', showTestimonials);
