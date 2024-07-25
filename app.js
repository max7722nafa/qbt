

function playVideo() {
    var video = document.getElementById('video');
    var overlay = document.querySelector('.overlay');
    video.play();
    overlay.style.display = 'none';
}

function playVideo1() {
    var video1 = document.getElementById('video1');
    var overlay1 = document.querySelector('.overlay1');
    video1.play();
    overlay1.style.display = 'none';
}

function playVideo3() {
    var video2 = document.getElementById('video1');
    var overlay1 = document.querySelector('.overlay1');
    video1.play();
    overlay1.style.display = 'none';
}


//Слайдер 1

let slideIndex = 0;
const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slide');
const totalSlides = slideItems.length;

function changeSlide(n) {
    slideIndex += n;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }
    updateSlidePosition();
    updateSlideFade();
}

function updateSlidePosition() {
    const offset = -slideIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function updateSlideFade() {
    slideItems.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === slideIndex) {
            slide.classList.add('active');
        }
    });
}

// Initialize the slider
updateSlidePosition();
updateSlideFade();

// Optional: Auto-change slides every 3 seconds
setInterval(() => {
    changeSlide(1);
}, 1000000);



let currentIndexTwo = 0;

function moveSlideTwo(step, sliderId) {
    const slider = document.getElementById(sliderId);
    const slides = slider.querySelector('.slides-two');
    const totalSlides = slides.children.length;

    currentIndexTwo = (currentIndexTwo + step + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentIndexTwo * 100}%)`;
}




document.querySelectorAll('.dropdownButton').forEach(button => {
    button.addEventListener('click', function () {
        var content = this.nextElementSibling;
        if (content.classList.contains('show')) {
            content.classList.remove('show');
            setTimeout(() => content.style.display = 'none', 300); // Ожидание завершения анимации
        } else {
            content.style.display = 'block';
            setTimeout(() => content.classList.add('show'), 0); // Ожидание следующего тикта времени
        }
    });
});




document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

    if (window.innerWidth <= 860) {
        var elements = document.querySelectorAll(".mobile-hide");
        if (elements.length > 0) {
            elements.forEach(function (element) {
                console.log("Removing element:", element);
                element.remove(); // Удаляет элемент из DOM, включая все дочерние элементы
            });
        } else {
            console.log("No elements with class 'mobile-hide' found");
        }
    } else {
        console.log("Window width is greater than 830px");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

    if (window.innerWidth <= 861) {
        var elements = document.querySelectorAll(".desk-hide");
        if (elements.length > 0) {
            elements.forEach(function (element) {
                element.style.display = "block"; // Или другой способ сделать элементы видимыми
                console.log("Showing element:", element);
            });
        } else {
            console.log("No elements with class 'desk-hide' found");
        }
    } else {
        console.log("Window width is greater than 860px");
    }
});
