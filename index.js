// set ending
const newYears = '1 Jan 2023';

// get html
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

// function countdown
function countdown() {
    // get new years
    const newYearDate = new Date(newYears);
    // get current data
    const currentDate = new Date();
    //get seconds
    const totalSeconds= (newYearDate - currentDate) / 1000;
    // days,hours,mins
    const days = Math.floor(totalSeconds/ 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = days; 
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
};

// format time
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();
formatTime();

setInterval(countdown, 1000);