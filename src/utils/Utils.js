export const monthName = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
];

export const getDate = date => {
    let rem = date % 10;
    let suffix;
    if (rem === 1)
        suffix = 'st';
    else if (rem === 2)
        suffix = 'nd';
    else if (rem === 3)
        suffix = 'rd';
    else suffix = 'th';

    return date + suffix;
}

export const formatTime = date => {
    let hour = date.getHours();
    let m = hour > 12 ? 'pm' : 'am';
    hour %= 12;
    hour = hour ? 12 : hour;
    if (hour < 10) hour = '0' + hour;

    let minute = date.getMinutes();
    if (minute < 10) minute = '0' + minute;

    return hour+':'+minute+' '+m;
}