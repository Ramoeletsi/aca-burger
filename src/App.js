import logo from './logo.svg';
import './App.css';
import FirstLayer from './components/FirstLayer';
import SecondLayer from './components/SecondLayer';
import ThirdLayer from './components/ThirdLayer';

function App() {
  
  return (
    <div className="BurgerApp">
      <h1>ACA Burger</h1>
      <div className ="topBread"></div>
        
        <ul className='options'>
          <li><FirstLayer/></li>
          <li><SecondLayer/></li>
          <li><ThirdLayer/></li>
        </ul> 

      <div className ="bottomBread"></div>
    </div>
  );
}

export default App;
