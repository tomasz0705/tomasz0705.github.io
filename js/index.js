const portfolioSection = document.querySelector(".portfolio");
const portfolioBtn = document.querySelector("#portfolio-btn");
const aboutmeSection = document.querySelector(".aboutme");
const aboutmeBtn = document.querySelector("#aboutme-btn")


portfolioBtn.addEventListener("click", function(event) {
    aboutmeSection.style.display = "none";
    portfolioSection.style.display = "block";
});

aboutmeBtn.addEventListener("click", function(event) {
    portfolioSection.style.display = "none";
    aboutmeSection.style.display = "block";
})

