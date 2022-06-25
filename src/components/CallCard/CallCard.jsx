import React from 'react'
import { Wrapper, Caller, Time } from './styles'

const monthName = [
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

const getDate = date => {
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

const formatTime = date => {
    let hour = date.getHours();
    let m = hour > 12 ? 'pm' : 'am';
    hour %= 12;
    hour = hour ? 12 : hour;
    if (hour < 10) hour = '0' + hour;

    let minute = date.getMinutes();
    if (minute < 10) minute = '0' + minute;

    return hour+':'+minute+' '+m;
}

export default function CallCard({ call }) {

    const isInbound = call.direction === 'inbound';
    const caller = isInbound ? call.from : call.to;

    const date = new Date(call.created_at);
    const calender = monthName[date.getMonth()] + ' ' + getDate(date.getDate());
    const watch = formatTime(date);

    return (
        <Wrapper missed={call.call_type === 'missed'}>
            <i className="fa-solid fa-phone" />
            <Caller>
                {caller}
                <small>tried to call via {call.via}</small>
            </Caller>
            <Time>
                <div>{calender}</div>
                <div>{watch}</div>
            </Time>
        </Wrapper>
    )
}
