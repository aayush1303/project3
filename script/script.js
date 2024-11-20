document.getElementById('menuIcon').addEventListener('click', function() {
    const menuContainer = document.getElementById('menuContainer');
    
    if (menuContainer.style.top === '0px') {
        menuContainer.style.top = '-100%'; 
    } else {
        menuContainer.style.top = '0'; 
    }
});

document.getElementById('closeMenu').addEventListener('click', function() {
    const menuContainer = document.getElementById('menuContainer');
    menuContainer.style.top = '-100%'; 
});

document.querySelectorAll("[id^='plusToggle']").forEach((toggle) => {
    toggle.addEventListener("click", function() {
        const idNumber = this.id.split("-")[1];
        const options = document.getElementById(`options-${idNumber}`);
        const icon = this.querySelector("i");

        options.classList.toggle("hidden");

        if (options.classList.contains("hidden")) {
            icon.classList.remove("fa-minus");
            icon.classList.add("fa-plus");
        } else {
            icon.classList.remove("fa-plus");
            icon.classList.add("fa-minus");
        }
    });
});

var swiper = new Swiper(".testimonial-carousel .mySwiper", {
    slidesPerView: 1,
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    pagination: {
        el: ".testimonial-carousel .swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 32,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 32,
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 32,
        },
    },
});
