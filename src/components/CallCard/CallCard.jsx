import React from 'react'
import { Wrapper, Caller, Time, Direction, Blur, Details, Archive } from './styles'
import { getDate, monthName, formatTime } from '../../utils/Utils';
import { postArchived } from '../../API';
import { getUpdate } from '../../App.jsx';

export default function CallCard({ call, onClick }) {

    const isInbound = call.direction === 'inbound';
    const caller = isInbound ? call.from : call.to;

    const date = new Date(call.created_at);
    const calender = monthName[date.getMonth()] + ' ' + getDate(date.getDate());
    const watch = formatTime(date);

    return (
        <Wrapper missed={call.call_type === 'missed'} onClick={onClick}>
            <i className="fa-solid fa-phone" />
            <Direction className='fa-solid fa-arrow-down' inbound={isInbound} />
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

export function CallDetails({ call, setCall }) {

    const unblur = event => event.target.classList.contains('unblur') && setCall(false);

    const archiveClick = () => {
        postArchived(call.id, !call.is_archived)
            .then(res => res.json())
            .then(console.log);
        setCall(false);
        getUpdate();
    }

    return (
        <Blur className='unblur' active={call} onClick={unblur}>
            <Details active={call}>
                <div>
                    Call Type:<br />
                    Timestamp:<br />
                    From:<br />
                    To:<br />
                    Via:<br />
                </div>
                <div>
                    {call.call_type}<br />
                    {new Date(call.created_at).toLocaleString()}<br />
                    {call.from}<br />
                    {call.to}<br />
                    {call.via}<br />
                </div>
                <Archive onClick={archiveClick}>
                    Click to {call.is_archived ? 'unarchive' : 'archive'}
                </Archive>
            </Details>
        </Blur>
    );
}