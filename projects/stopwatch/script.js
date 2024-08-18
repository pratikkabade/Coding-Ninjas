document.addEventListener('DOMContentLoaded', () => {
    const timeDisplay = document.getElementById('time-display');
    const startButton = document.getElementById('start-button');
    const stopButton = document.getElementById('stop-button');
    const resetButton = document.getElementById('reset-button');

    let timer;
    let milliseconds = 0;
    let isRunning = false;

    function formatTime(ms) {
        const totalSeconds = Math.floor(ms / 1000);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        const millis = (ms % 1000) / 10;

        // Return time with hours, minutes, seconds, and two decimal places for milliseconds
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(millis.toFixed(0)).padStart(2, '0')}`;
    }

    function updateTime() {
        timeDisplay.textContent = formatTime(milliseconds);
    }

    function startTimer() {
        if (!isRunning) {
            isRunning = true;
            const startTime = Date.now() - milliseconds;
            timer = setInterval(() => {
                milliseconds = Date.now() - startTime;
                updateTime();
            }, 10); // update every 10 milliseconds
        }
    }

    function stopTimer() {
        if (isRunning) {
            isRunning = false;
            clearInterval(timer);
        }
    }

    function resetTimer() {
        stopTimer();
        milliseconds = 0;
        updateTime();
    }

    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);
});
