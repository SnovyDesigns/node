function timeFormat (uptime) {
    var seconds = uptime % 60,
        minutes = (Math.floor(uptime / 60)) % 60,
        hours = 0;
        if (uptime >= 3600) {
            hours = Math.floor(uptime / 3600);
        }
    return {
        sec: seconds,
        min: minutes,
        h: hours
    };
}

module.exports = timeFormat;