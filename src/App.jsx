import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, Wrapper, GetTheme, Blur, PhonePad } from './AppStyles.js';
import BottomButtons from './components/NavButton/BottomButtons.jsx';
import { Overlay as PhoneOverlay } from './components/NumPad/NumPad.jsx';
import Content from './components/Content/Content.jsx';

const App = () => {
  const [darkTheme, setTheme] = useState(false);
  const [activePage, setPage] = useState(2);
  const [showPhoneOverlay, setOverlay] = useState(false);

  return (
    <ThemeProvider theme={GetTheme(darkTheme)}>
      <GlobalStyles />
      <Wrapper>
        <Content activePage={activePage}/>
        <BottomButtons
          activePage={activePage}
          setPage={setPage}
          darkTheme={darkTheme}
          setTheme={setTheme}
          setOverlay={setOverlay}
        />

        <PhoneOverlay active={showPhoneOverlay} setActive={setOverlay} />
      </Wrapper>

    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
