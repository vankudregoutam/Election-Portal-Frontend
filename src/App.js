import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Home />
      </Router>

    </div>
  );
}

export default App;
