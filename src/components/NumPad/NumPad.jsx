import React, { useState } from 'react'
import { Base, Circle, Blur, Pad, Display } from './styles'

export function Button({ onClick }) {
    return (
        <Base onClick={onClick}>
            <Circle>
                <div>
                    {/* 3 by 3 dots */}
                    <div><span /><span /><span /></div>
                    <div><span /><span /><span /></div>
                    <div><span /><span /><span /></div>
                </div>
            </Circle>
        </Base>
    )
}

export function Overlay({ active, setActive }) {
    const [displayNumber, setNumber] = useState('');

    const unblur = event => event.target.classList.contains('unblur') && setActive(false);
    const padClick = event => {
        // unfortunately this is quite messy because I need to account for
        // clicking on the <i/> if I don't want to risk going up the dom tree
        if ((event.target.tagName === 'SPAN' || event.target.tagName === 'I')
            && !event.target.classList.contains('unblur')) {
            let input = event.target.innerHTML;

            if (isNaN(parseInt(input))) //delete
                setNumber(displayNumber.slice(0, displayNumber.length - 1));
            else if(displayNumber.length<20)//append numbers up to 20
                setNumber(displayNumber + input);
        }
    }

    return (
        <Blur className='unblur' active={active} onClick={unblur}>
            <Display active={active}>
                The phone doesn't work...<br />
                {displayNumber}
            </Display>
            <Pad active={active} onClick={padClick}>
                <div className='unblur'>
                    <i className='fa-solid fa-angles-down unblur' />&nbsp;&nbsp;
                    <i className='fa-solid fa-angles-down unblur' />&nbsp;&nbsp;
                    <i className='fa-solid fa-angles-down unblur' />
                </div>
                <span>1</span><span>2</span><span>3</span>
                <span>4</span><span>5</span><span>6</span>
                <span>7</span><span>8</span><span>9</span>
                <span className='unblur'><i className="fa-solid fa-angles-down unblur" /></span>
                <span>0</span>
                <span><i className='fa-solid fa-delete-left' /></span>
            </Pad>
        </Blur>
    )
}