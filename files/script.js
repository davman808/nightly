setInterval(displayClock, 100);
let wallpaperNumber = Math.round(Math.random() * 17).toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false});
document.body.style.backgroundImage ="url(images/" + wallpaperNumber + ".jpg)";
function displayClock() {
    const time = document.querySelector('#time');
    let date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    if (hrs < 10) {
        hrs = "0" + hrs
    }
    if (min < 10) {
        min = "0" + min
    }
    time.textContent = hrs + ':' + min;
}