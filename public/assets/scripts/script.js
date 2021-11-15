const burgerToggle = document.getElementById("burgerToggle");
const topNavLinks = document.getElementsByClassName("top-nav-links")[0];


burgerToggle.addEventListener("click", function () {
    burgerToggle.classList.toggle("active");
    topNavLinks.classList.toggle("active");
})