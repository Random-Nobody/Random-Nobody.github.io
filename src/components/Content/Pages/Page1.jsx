import React, { useState } from 'react'
import { Wrapper, Titlebar, LogoWrapper, DividerWrapper, MenuWrapper, ActiveBar, Content, ArchiveAll } from './styles1';

import Logo from '../../Logo/Logo.jsx';
import FunnyDivider from '../../FunnyDivider/FunnyDivider.jsx';
import CallCard from '../../CallCard/CallCard.jsx';
import { archiveAll } from '../../../App.jsx';

const GetContent = ({ active, data, showDetails }) => {
  if (active === 0) {
    if (data.missed.length)
      return <Content>
        {data.missed.map(call => <CallCard key={call.id} call={call} onClick={() => showDetails(call)} />)}
        <ArchiveAll onClick={() => archiveAll(true, true)} >Click to archive all missed calls</ArchiveAll>
      </Content>
    else return <Content>
      All caught up!
    </Content>
  };
  if (active === 1) {
    return <Content>
      {data.raw.map(call => <CallCard key={call.id} call={call} onClick={() => showDetails(call)} />)}
      <ArchiveAll onClick={() => archiveAll(true)} >Click to archive all the calls!</ArchiveAll>
    </Content>
  }
  return <Content>Nothing here ATM...</Content>
}

export default function Page1({ data, showDetails }) {
  const [active, setActive] = useState(0);

  const handleActive = page => () => setActive(page);
  return (
    <Wrapper>
      <Titlebar>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DividerWrapper>
          <FunnyDivider />
        </DividerWrapper>
        <MenuWrapper>
          <span onClick={handleActive(0)}>InBox</span>
          <span onClick={handleActive(1)}>All Calls</span>
          <i onClick={handleActive(2)} className="fa-solid fa-sliders" />
        </MenuWrapper>
        <ActiveBar active={active} />
      </Titlebar>
      <GetContent active={active} data={data} showDetails={showDetails} />
    </Wrapper>
  )
}
