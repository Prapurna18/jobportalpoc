import React, { useState } from 'react';
import Home from './Home';
import Header from './Header';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import Search from './Search';
import Login from './Login';



function App() {
  const [inputName, SetInputName] = useState('');
  
  const[hobbies, setHobbies]=useState('listening to music');
  const[games, setGames]=useState('cricket');
  const[personalDetails,setPersonalDetails]=useState('prapurna');
  const[age,setAge]=useState(26);
  const[money,setMoney]=useState(100);

  const plus=() => {
    setAge(age+1);
    
}
const minus=() => {
  setAge(age-1);
  
}
const add=() => {
  setMoney(money+20);
  
}
const addition=() => {
setMoney(money+10);

}





  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <h1>My favourite hobbies are {hobbies} </h1>
        <h1>My favourite games are {games} </h1>
        <h1>My personalDetails are {personalDetails} </h1>
        <h1>My age is {age} </h1>
        <h1>My money is {money} </h1>
        <button onClick={plus} type="button" >plus</button>
        <button onClick={minus} type="button" >minus</button>
        
        <div className="jack">
        <button onClick={add} type="button" >add</button>
        <button onClick={addition} type="button" >addition</button>

        </div>






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
