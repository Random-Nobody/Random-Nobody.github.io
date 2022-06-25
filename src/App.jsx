import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, Wrapper, GetTheme, Blur, PhonePad } from './AppStyles.js';
import BottomButtons from './components/NavButton/BottomButtons.jsx';
import { Overlay as PhoneOverlay } from './components/NumPad/NumPad.jsx';
import { CallDetails as CallOverlay } from './components/CallCard/CallCard.jsx';
import Content from './components/Content/Content.jsx';

import { getReset, getCalls } from './API.js';

export let getUpdate;

const App = () => {
  const [darkTheme, setTheme] = useState(false);
  const [showPhoneOverlay, setPhoneOverlay] = useState(false);
  const [showCallOverlay, setCallOverlay] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activePage, setPage] = useState(0);
  const [data, setData] = useState({
    raw: [],
    missed: [],
    archived: []
  });

  getUpdate = () => {
    setLoading(true);
    getCalls()
      .then(res => res.json())
      .then(data => {
        data.sort((a, b) => Date.parse(a.created_at) > Date.parse(b.created_at));
        let parsed = {
          raw: data,
          missed: [],
          archived: []
        };
        data.forEach(call => {
          if (call.is_archived)
            parsed.archived.push(call);
          else if (call.call_type === 'missed')
            parsed.missed.push(call);
        })
        setData(parsed);
        // sorry, I know this is bad form but I started too late and just want to hit the deadline now.
        this.rerender();
      });
    setLoading(false);
  }

  useEffect(() => {
    getUpdate();
  }, []);

  return (
    <ThemeProvider theme={GetTheme(darkTheme)}>
      <GlobalStyles />
      <Wrapper>
        <Content
          data={data}
          activePage={activePage}
          showDetails={setCallOverlay}
        />
        <BottomButtons
          activePage={activePage}
          setPage={setPage}
          darkTheme={darkTheme}
          setTheme={setTheme}
          setOverlay={setPhoneOverlay}
          data={data}
        />

        <PhoneOverlay active={showPhoneOverlay} setActive={setPhoneOverlay} />
        <CallOverlay call={showCallOverlay} setCall={setCallOverlay} />
      </Wrapper>

    </ThemeProvider>
  );
};

export default App;