import React from 'react';
import Routes from './routes';

import Main from './pages/main';
import Header from './components/Header';

import './styles.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
