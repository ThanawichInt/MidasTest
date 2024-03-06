"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function clockAngle(hh_mm) {
    // CASE#1 Empty input 
    if (hh_mm.length == 0)
        return "INPUT WAS EMPTY";
    // 
    if (!hh_mm.includes(":"))
        return "MISSING DELIMETER `:`";
    const [hour, minute] = hh_mm.split(":");
    let hourInt = parseInt(hour);
    let minuteInt = parseInt(minute);
    let angle = 0;
    // CASE#2 Negative number
    if (hourInt < 0 || minuteInt < 0)
        return "NEGATIVE NUMBER";
    // CASE#3 Over 24 hour and 59 minute format;
    if (hourInt > 24 || minuteInt > 59)
        return "INVALID INPUT `09:30`";
    // CASE#4 Not numerical
    if (!/^\d+$/.test(hour) || !/^\d+$/.test(minute))
        return "INPUT IS NOT NUMBERIC";
    if (hourInt > 12) {
        hourInt -= 12;
    }
    let angleMinute = minuteInt * 6;
    let angleHour = hourInt * 30 + (angleMinute / 360) * 30;
    if (angleHour > angleMinute) {
        angle = angleHour - angleMinute;
    }
    else {
        angle = angleMinute - angleHour;
    }
    angle > 180 ? angle = 360 - angle : angle;
    return angle;
}
exports.default = clockAngle;
//# sourceMappingURL=clockAngle.js.map