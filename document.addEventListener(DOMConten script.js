document.addEventListener("DOMContentLoaded", () => {
    const moodSelector = document.getElementById("mood-selector");
    const timerInput = document.getElementById("timer-input");
    const startButton = document.getElementById("start-timer");
    const timerDisplay = document.getElementById("timer-display");
    let timerInterval;

    startButton.addEventListener("click", () => {
        const mood = moodSelector.value;
        const time = parseInt(timerInput.value);

        if (!time || time <= 0) {
            alert("Please enter a valid time!");
            return;
        }

        // Set background color based on mood
        document.body.className = mood;

        // Timer logic
        let remainingTime = time;
        updateTimerDisplay(remainingTime);
        clearInterval(timerInterval);

        timerInterval = setInterval(() => {
            remainingTime--;
            if (remainingTime <= 0) {
                clearInterval(timerInterval);
                timerDisplay.innerText = "Time's up!";
                playSound();
            } else {
                updateTimerDisplay(remainingTime);
            }
        }, 1000);
    });

    function updateTimerDisplay(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        timerDisplay.innerText = `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    }

    function playSound() {
        const audio = new Audio("https://www.soundjay.com/button/beep-07.wav");
        audio.play();
    }
});
