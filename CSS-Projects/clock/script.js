function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = "AM";

    if (hours >= 12) {
        ampm = "PM";
    }

    if (hours > 12) {
        hours -= 12;
    }

    if (hours === 0) {
        hours = 12;
    }

    // Add leading zero
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
    document.getElementById("ampm").innerText = ampm;

    // Date
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    document.getElementById("date").innerText = now.toLocaleDateString(undefined, options);
}

// Initial call
updateClock();

// Update every second
setInterval(updateClock, 1000);
