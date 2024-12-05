let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slider-main .slide');
    const totalSlides = slides.length;
    const dots = document.querySelectorAll('.dots span');

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    // Перемещаем слайды
    document.querySelector('.slider-main').style.transform = `translateX(-${currentSlide * 100}%)`;

    // Обновляем активную точку
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Динамически создаем точки
function createDots() {
    const slides = document.querySelectorAll('.slider-main .slide');
    const dotsContainer = document.querySelector('.dots');

    slides.forEach((slide, index) => {
        const dot = document.createElement('span');
        dot.addEventListener('click', () => showSlide(index));
        dotsContainer.appendChild(dot);
    });

    // Показываем первый слайд
    showSlide(currentSlide);
}

createDots();
