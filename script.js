// Animated Counter
const counter = document.getElementById("counter");
const target = +counter.getAttribute("data-target");

let count = 0;
const speed = 10;

const updateCounter = () => {
    const increment = target / speed;
    if (count < target) {
        count += increment;
        counter.textContent = Math.ceil(count);
        setTimeout(updateCounter, 50);
    } else {
        counter.textContent = target;
    }
};

window.addEventListener("load", updateCounter);
