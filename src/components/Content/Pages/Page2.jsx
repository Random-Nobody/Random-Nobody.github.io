import React, { useState } from 'react'
import { Wrapper, Titlebar, LogoWrapper, DividerWrapper, MenuWrapper, Content, ArchiveAll } from './styles2';

import Logo from '../../Logo/Logo.jsx';
import FunnyDivider from '../../FunnyDivider/FunnyDivider.jsx';
import CallCard from '../../CallCard/CallCard.jsx';

import { archiveAll } from '../../../App.jsx';

const GetContent = ({ data, showDetails }) => {
    if (data.archived.length)
        return <Content>
            {data.archived.map(call => <CallCard key={call.id} call={call} onClick={() => showDetails(call)} />)}
            <ArchiveAll onClick={() => archiveAll(false)} >Click to unarchive ...whatever's here</ArchiveAll>
        </Content>
    return <Content>
        No archived calls found...
    </Content>
}

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
            <GetContent data={data} showDetails={showDetails} />
        </Wrapper>
    )
}
