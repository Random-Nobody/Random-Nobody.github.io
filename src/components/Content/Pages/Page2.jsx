import React, { useState } from 'react'
import { Wrapper, Titlebar, LogoWrapper, DividerWrapper, MenuWrapper, ActiveBar, Content } from './styles2';

import Logo from '../../Logo/Logo.jsx';
import FunnyDivider from '../../FunnyDivider/FunnyDivider.jsx';
import CallCard from '../../CallCard/CallCard.jsx';

export default function Page1({ data, showDetails }) {

    return (
        <Wrapper>
            <Titlebar>
                <MenuWrapper>
                    Archived Items
                </MenuWrapper>
                <DividerWrapper>
                    <FunnyDivider flip />
                </DividerWrapper>
                <LogoWrapper>
                    <Logo />
                </LogoWrapper>
            </Titlebar>
            <Content>
                {data.archived.length ? data.archived.map(call => <CallCard key={call.id} call={call} onClick={() => showDetails(call)} />) : 'No archived calls found'}
            </Content>
        </Wrapper>
    )
}
