const counter = document.getElementById('count');
const min = document.getElementById('min');
const playTimer = document.getElementById('play');

playTimer.addEventListener('click', () => {
    sec = 0;
    minute = 0;
    let timer;
    timer = setInterval(() => {
        counter.innerHTML = sec;
        sec++;
        if (sec > 59) {
            sec = 0;
            minute++;
            min.innerHTML = minute + ':'
        }
    }, 1000)
})

