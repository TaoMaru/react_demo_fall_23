
import './App.css';
import Nav from './components/Nav';
import { Outlet } from 'react-router';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App d-flex flex-column justify-content-center">
      <Nav/>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
