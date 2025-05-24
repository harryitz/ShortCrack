const params = new URLSearchParams(window.location.search);
const target = params.get("to");
const countdownEl = document.querySelector(".countdown");

let seconds = 3;
countdownEl.textContent = seconds;

const countdown = setInterval(() => {
    seconds--;
    countdownEl.textContent = seconds;
    if (seconds <= 0) {
        clearInterval(countdown);
        if (target) {
            window.location.href = target;
        }
    }
}, 1000);
