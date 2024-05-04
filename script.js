function updateDigitalClock() {
    const now = new Date().toLocaleString("en-US", {timeZone: "Asia/Tokyo"});
    const dateTime = new Date(now);
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('digitalClock').textContent = `${hours}:${minutes}:${seconds}`;
}

function updateAnalogClock() {
    const now = new Date().toLocaleString("en-US", {timeZone: "Asia/Tokyo"});
    const dateTime = new Date(now);
    const second = dateTime.getSeconds();
    const minute = dateTime.getMinutes();
    const hour = dateTime.getHours();

    const secondAngle = second * 6;
    const minuteAngle = minute * 6 + (second / 10);
    const hourAngle = (hour % 12) * 30 + (minute / 2);

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
        updateAnalogClock(); // 初期表示用
    } else if (/Android/i.test(userAgent)) {
        document.getElementById('analogClock').style.display = 'none';
        document.getElementById('digitalClock').style.display = 'block';
        setInterval(updateDigitalClock, 1000);
        updateDigitalClock(); // 初期表示用
    }
}

window.onload = displayClockBasedOnDevice;
