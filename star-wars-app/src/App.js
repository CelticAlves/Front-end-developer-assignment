import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/footer';
import Menu from './components/menu';
import About from './components/about';
import Contact from './components/contact';
import List from './components/listComponent';
import { ToastContainer } from '../node_modules/react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/" exact component={List}></Route>
      </Switch>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
