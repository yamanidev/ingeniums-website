const burgerToggle = document.getElementById("burgerToggle");
const topNavLinks = document.getElementsByClassName("top-nav-links")[0];
const scrollTopBtn = document.getElementById("scroll-top-btn");


burgerToggle.addEventListener("click", function () {
    burgerToggle.classList.toggle("active");
    topNavLinks.classList.toggle("active");
});

window.onscroll = function () {
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
};

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo(0, 0);
});

