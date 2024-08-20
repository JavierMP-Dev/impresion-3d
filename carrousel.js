let currentSlides = {};

function showSlide(carouselId, index) {
    const carousel = document.getElementById(carouselId);
    const slides = carousel.querySelectorAll('.carousel-item');

    if (index >= slides.length) {
        currentSlides[carouselId] = 0;
    } else if (index < 0) {
        currentSlides[carouselId] = slides.length - 1;
    } else {
        currentSlides[carouselId] = index;
    }

    const offset = -currentSlides[carouselId] * 100;
    carousel.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;

    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlides[carouselId]].classList.add('active');
}

function nextSlide(carouselId) {
    showSlide(carouselId, currentSlides[carouselId] + 1);
}

function prevSlide(carouselId) {
    showSlide(carouselId, currentSlides[carouselId] - 1);
}

// Inicializando todos los carruseles en la página
document.querySelectorAll('.carousel').forEach(carousel => {
    const carouselId = carousel.getAttribute('id');
    currentSlides[carouselId] = 0;
    showSlide(carouselId, 0);
});

