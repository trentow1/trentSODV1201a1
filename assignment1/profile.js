// Display profile picture after 10 seconds
setTimeout(() => {
    document.getElementById("profilePic").hidden = false;
}, 10000);

// Display current date in footer
const footer = document.getElementById("footerText");
const today = new Date().toDateString();
footer.textContent = `© Trent Wiesner - ${today}`;
