import React, { useState } from 'react'
import { Wrapper, Titlebar, LogoWrapper, DividerWrapper, MenuWrapper, ActiveBar, Content } from './styles1';

import Logo from '../../Logo/Logo.jsx';
import FunnyDivider from '../../FunnyDivider/FunnyDivider.jsx';
import CallCard from '../../CallCard/CallCard.jsx';

export default function Page1({ data, showDetails }) {
  const [active, setActive] = useState(1);

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
      <Content>
        {active === 0 ? data.missed.map(call => <CallCard key={call.id} call={call} onClick={() => showDetails(call)} />) :
          active === 1 ? data.raw.map(call => <CallCard key={call.id} call={call} onClick={() => showDetails(call)} />) :
            'Also nothing here atm'
        }
      </Content>
    </Wrapper>
  )
}
