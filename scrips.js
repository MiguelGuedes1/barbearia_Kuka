const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.right');
const prevButton = document.querySelector('.carousel-button.left');
const slideWidth = slides[0].getBoundingClientRect().width;

// Organize os slides lado a lado
slides.forEach((slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
});

// Função para mover o carrossel
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

// Clique no botão de próximo
nextButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide') || slides[0];
    const nextSlide = currentSlide.nextElementSibling || slides[0];

    moveToSlide(track, currentSlide, nextSlide);
});

// Clique no botão de anterior
prevButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide') || slides[0];
    const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1];

    moveToSlide(track, currentSlide, prevSlide);
});
