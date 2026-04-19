const countdownDate = new Date("August 23, 2026").getTime();

const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Wedding Day!";
    }
}, 1000);

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.image');
    images.forEach((img, index) => {
        img.style.animation = `fadeIn 1s ease forwards ${index * 0.5}s`;
    });
});