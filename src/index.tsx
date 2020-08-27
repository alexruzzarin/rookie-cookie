import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { defaultRebootTheme } from 'styled-reboot';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { GlobalStyle } from './components/styled';
import { ShowAddClassProvider } from './hooks/useShowAddClass';

const theme: DefaultTheme = {
  ...defaultRebootTheme,
  bodyColor: '#003140',
  headingsMarginBottom: '0',
  linkColor: '#003140',
  linkHoverColor: '#006280',
  paragraphMarginBottom: '0',
  headerBg: '#00c4ff',
  shadowColor: '#006280',
  buttonBorderColor: '#003140',
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ShowAddClassProvider>
      <GlobalStyle />
      <App />
    </ShowAddClassProvider>
  </ThemeProvider>,
  document.getElementById('root'),
);
