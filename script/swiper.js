const multiplier = {
    translate: .1,
    rotate: .01
}

var swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 90,
    centeredSlides: true,
    loop: false,
    grabCursor: true,
    autoplay: {
        delay: 5000,  // Time in ms between transitions
        disableOnInteraction: false,  // Keep autoplay going after user interaction
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    mousewheel: {
        invert: false,
        forceToAxis: true,
    },
    lazy: {
        loadPrevNext: true,
        loadOnTransitionStart: false,
    },
});

function calculateWheel() {
    const slides = document.querySelectorAll('.single')
    slides.forEach((slide, i) => {
        const rect = slide.getBoundingClientRect()
        const r = window.innerWidth * .5 - (rect.x + rect.width * .5)
        let ty = Math.abs(r) * multiplier.translate - rect.width * multiplier.translate

        if (ty < 0) {
            ty = 0
        }
        const transformOrigin = r < 0 ? 'left top' : 'right top'
        slide.style.transform = `translate(0, ${ty}px) rotate(${-r * multiplier.rotate}deg)`
        slide.style.transformOrigin = transformOrigin
    })
}

function raf() {
    requestAnimationFrame(raf)
    calculateWheel()
}

raf();