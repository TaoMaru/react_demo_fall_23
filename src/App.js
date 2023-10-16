
import './App.css';
import Nav from './components/Nav';
import { Outlet } from 'react-router';
import APODContent from './components/APODContent';

function App() {
  return (
    <div className="App d-flex flex-column justify-content-center">
      <Nav/>
      <APODContent />
      <Outlet />
    </div>
  );
}

export default App;
