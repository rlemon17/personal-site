// Collecting Coins
$("#CS").on("click", () => $("#CS").attr("src", "images/CS Gif.gif"));
$("#BizOps").on("click", () => $("#BizOps").attr("src", "images/BizOps Gif.gif"));
$("#TEACH").on("click", () => $("#TEACH").attr("src", "images/TEACH Gif.gif"));

// Disabling Scroll until welcome animations finish
$('body').addClass('stop-scrolling');
setTimeout(() => {
    $('body').removeClass('stop-scrolling')
}, 3000);

// Scroll Fader and Slider animations
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});