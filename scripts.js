function updateDigitalClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('digitalClock').textContent = `${hours}:${minutes}:${seconds}`;
}

function updateAnalogClock() {
    const now = new Date();
    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();

    const secondAngle = second * 6;
    const minuteAngle = minute * 6 + (second / 10);
    const hourAngle = hour * 30 + (minute / 2);

    document.getElementById('secondHand').style.transform = `rotate(${secondAngle}deg)`;
    document.getElementById('minuteHand').style.transform = `rotate(${minuteAngle}deg)`;
    document.getElementById('hourHand').style.transform = `rotate(${hourAngle}deg)`;
}

function displayClockBasedOnDevice() {
    const userAgent = navigator.userAgent;
    if (/iPhone/i.test(userAgent)) {
        document.getElementById('analogClock').style.display = 'block';
        document.getElementById('digitalClock').style.display = 'none';
        setInterval(updateAnalogClock, 1000);
    } else if (/Android/i.test(userAgent)) {
        document.getElementById('analogClock').style.display = 'none';
        document.getElementById('digitalClock').style.display = 'block';
        setInterval(updateDigitalClock, 1000);
    }
}

window.onload = displayClockBasedOnDevice;