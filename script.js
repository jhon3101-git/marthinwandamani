/* Toglle & Responsive Navigation */ 
consSlide = () => {
    const burger = document.querySelector(".burger");
    const navList = document.querySelector("nav");

    burger.addEventListener("click", () => {
        navList.classList.toggle("nav-akctive");
        burger.classList.toggle("toggle-burger");
    });
};

navSlide();