import React from 'react';
import './App.css';
import MyHeader from './components/header/header';
import MyThemeProvider from './theming/theme-provider.jsx';

function App() {

  return (
    <MyThemeProvider>
      <MyHeader></MyHeader>
    </MyThemeProvider >
  );
}

export default App;
