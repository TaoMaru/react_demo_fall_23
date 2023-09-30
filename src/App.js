import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Body from './components/Body';
import BodyHooks from './components/BodyHooks';

function App() {
  return (
    <div className="App">
      <Nav/>
      
      <Body />
      <BodyHooks />
    </div>
  );
}

export default App;
