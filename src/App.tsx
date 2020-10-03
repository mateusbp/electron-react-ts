import React from 'react';
import { render } from 'react-dom';

import Screen from './Screen';
import GlobalStyle from './styles/global';

const App = () => {
  return (
    <>
      <Screen />
      <GlobalStyle />
    </>
  );
}

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
