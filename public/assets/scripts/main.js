const navSlide = () =>{
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".top-nav-links");
    const navLinks = document.querySelectorAll(".top-nav-links li");
    burger.addEventListener("click", () =>{
        // Toggle burger
        nav.classList.toggle("burger-nav-active");
        // Links animation
        navLinks.forEach((link, index) =>{
            // Checking if the animation was already assigned
            if(link.style.animation){
                link.style.animation = "";
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1}s`;
            }
        });
        // Burger animation
        burger.classList.toggle("burger-toggle");
    });
};

const scrollTop = () =>{
    const scrollTopBtn = document.getElementById("scroll-top-btn");

    window.onscroll = function(){
        scrollTopBtn.classList.toggle("active", window.scrollY > 500);
    };
    
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo(0, 0);
    });
}

const app = () =>{
    navSlide();
    scrollTop();
}

app();
