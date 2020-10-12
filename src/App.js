import React from 'react';
import Home from './Home';
import Header from './Header';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import Search from './Search';
import Login from './Login';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Login></Login>
        <Search></Search>
        
        
        <Home></Home>
        <p>
        
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;
