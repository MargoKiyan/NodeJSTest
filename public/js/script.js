document.addEventListener('DOMContentLoaded', () => {
    const countdownDate = new Date("2025-07-10T00:00:00+03:00").getTime();

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const countdownContainer = document.getElementById('countdown-container');
    const greetingButton = document.getElementById('greeting-button');
    const mainTitle = document.getElementById('main-title');

    const formatTime = (time) => (time < 10 ? `0${time}` : time);

    const timerInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            daysEl.textContent = formatTime(days);
            hoursEl.textContent = formatTime(hours);
            minutesEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
        } else {
            clearInterval(timerInterval);

            countdownContainer.classList.add('opacity-0');
            mainTitle.classList.add('title-zoom-out-animation');

            setTimeout(() => {
                countdownContainer.classList.add('hidden');

                mainTitle.textContent = "Ура! Цей загадковий день настав!";

                mainTitle.classList.remove('title-zoom-out-animation');

                mainTitle.classList.add('title-reveal-animation');

                greetingButton.classList.remove('hidden');
                greetingButton.classList.add('animate-pulse');
                AOS.refreshHard();

            }, 1000);
        }
    }, 1000);
});