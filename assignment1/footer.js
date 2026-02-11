// Inserts full current date into all page footers
(function () {
    const footerSpan = document.getElementById("footerText");

    if (footerSpan) {
        const today = new Date();
        footerSpan.textContent = `© Trent Wiesner - ${today.toDateString()}`;
    }
})();
