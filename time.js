function showTime() {
    let now = new Date();
    let timeString = now.toLocaleTimeString();
    document.getElementById("clock").innerText = timeString;
    setTimeout(showTime, 1000);

}
 