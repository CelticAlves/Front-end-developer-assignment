import React from 'react';
import './App.css';
import Footer from './components/footer';
import Menu from './components/menu';
import Data from './components/dataComponent';

function App() {
  return (
    <div className="App">
      <Menu />
      <Data />
      <Footer />
    </div>
  );
}

export default App;
