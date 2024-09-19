import React from 'react';
import { GlobalReset } from './common/reset/global-reset';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalReset />
      <Header />
      <Outlet />
    </>

  );
}

export default App;
