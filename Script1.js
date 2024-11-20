document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showSlide(index) {
        if (index >= slide.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slide.length - 1;
        } else {
            currentIndex = index;
        }
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    document.querySelector('.prev').addEventListener('click', function() {
        showSlide(currentIndex - 1);
    });

    document.querySelector('.next').addEventListener('click', function() {
        showSlide(currentIndex + 1);
    });

    let autoSlide = setInterval(function() {
        showSlide(currentIndex + 1);
    }, 3000);

    document.querySelector('.slider').addEventListener('mouseover', function() {
        clearInterval(autoSlide);
    });

    document.querySelector('.slider').addEventListener('mouseout', function() {
        autoSlide = setInterval(function() {
            showSlide(currentIndex + 1);
        }, 3000);
    });
});
