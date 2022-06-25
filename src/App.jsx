import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, Wrapper, GetTheme, Blur, PhonePad } from './AppStyles.js';
import BottomButtons from './components/NavButton/BottomButtons.jsx';
import { Overlay as PhoneOverlay } from './components/NumPad/NumPad.jsx';
import Content from './components/Content/Content.jsx';

import { getReset, getCalls } from './API.js';

export let getUpdate;

const App = () => {
  const [data, setData] = useState({
    raw: [],
    missed: [],
    archived: []
  });

  console.log(data);

  getUpdate = () =>
    getReset()
      .then(getCalls)
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
      });

  useEffect(() => {
    getUpdate();
  }, []);

  const [darkTheme, setTheme] = useState(false);
  const [activePage, setPage] = useState(0);
  const [showPhoneOverlay, setOverlay] = useState(false);

  return (
    <ThemeProvider theme={GetTheme(darkTheme)}>
      <GlobalStyles />
      <Wrapper>
        <Content data={data} activePage={activePage} />
        <BottomButtons
          activePage={activePage}
          setPage={setPage}
          darkTheme={darkTheme}
          setTheme={setTheme}
          setOverlay={setOverlay}
          data={data}
        />

        <PhoneOverlay active={showPhoneOverlay} setActive={setOverlay} />
      </Wrapper>

    </ThemeProvider>
  );
};

export default App;