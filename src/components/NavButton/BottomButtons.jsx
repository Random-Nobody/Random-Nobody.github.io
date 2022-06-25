import React, { Fragment, useState } from 'react'
import { Wrapper, Icon, Alert, ActiveBar } from './styles'

import { Button as NumPad } from '../NumPad/NumPad.jsx'

export default function BottomButtons({
    activePage,
    setPage,
    darkTheme,
    setTheme,
    setOverlay,
    data
}) {

    const iconClick = page => () => setPage(page);
    const numpadClick = () => setOverlay(true);
    const themeClick = () => setTheme(!darkTheme);

    return (
        <Fragment>
            <Wrapper>
                <Icon active={activePage === 0} onClick={iconClick(0)}>
                    <i className="fa-solid fa-phone" />
                    <Alert>{data.missed.length}</Alert>
                </Icon>
                <Icon active={activePage === 1} onClick={iconClick(1)}>
                    <i className="fa-solid fa-bookmark" />
                </Icon>
                <NumPad onClick={numpadClick} />
                <Icon active={activePage === 2} onClick={iconClick(2)}>
                    <i className="fa-solid fa-user" />
                </Icon>
                <Icon onClick={themeClick}>
                    <i className={darkTheme ? 'fa-solid fa-sun' : 'fa-solid fa-moon'} />
                </Icon>
                <ActiveBar active={activePage} />
            </Wrapper>


        </Fragment>
    )
}
