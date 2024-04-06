let [s, m, h, ms] = [0, 0, 0, 0];
let displayTime = document.getElementById("displayTime");
let Timer = null;

function stopwatch() {
    ms++;
    if (ms == 100) {
        ms = 0;
        s++;
        if (s == 60) {
            s = 0;
            m++;
            if (m == 60) {
                m = 0;
                h++;
            }
        }
    }

    let hours = h < 10 ? "0" + h : h;
    let minutes = m < 10 ? "0" + m : m;
    let seconds = s < 10 ? "0" + s : s;
    let milliseconds = ms < 10 ? "00" + ms : ms < 100 ? "0" + ms : ms;
    displayTime.innerHTML = hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}

function watchStart() {
    if (Timer !== null) {
        clearInterval(Timer);
    }
    Timer = setInterval(stopwatch, 10); // Update interval to 10 milliseconds for millisecond accuracy
}

function watchStop() {
    clearInterval(Timer);
}

function watchReset() {
    clearInterval(Timer);
    [s, m, h, ms] = [0, 0, 0, 0];
    displayTime.innerHTML = "00:00:00.000";
}
