import React from 'react';
import Home from './Home';
import Header from './Header';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <img src={logo} className="App-logo" alt="logo" />
        
        <Home></Home>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;
