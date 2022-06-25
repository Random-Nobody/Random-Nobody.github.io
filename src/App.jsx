import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, Wrapper, GetTheme } from './AppStyles.js';
import Logo from './components/Logo/Logo.jsx';

import BottomButtons from './components/NavButton/BottomButtons.jsx';
import TopTabs from './components/TopTabs/TopTabs.jsx';

const App = () => {
  let [colorTheme, setTheme] = useState('light');
  return (
    <ThemeProvider theme={GetTheme(colorTheme)}>
      <GlobalStyles />
      <Wrapper>

        <TopTabs />

        <BottomButtons />

      </Wrapper>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
