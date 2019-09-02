import React from 'react';
import Footer from './components/footer';
import Menu from './components/menu';
import List from './components/listComponent';
import { ToastContainer } from '../node_modules/react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <ToastContainer />
      <List />
      <Footer />
    </div>
  );
}

export default App;
