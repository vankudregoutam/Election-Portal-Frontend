import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar'
import Form from './components/Form';
import Services from './components/Services';
import MobileApps from './components/MobileApps';
import Contact from './components/Contact';
import Update from './components/Update';
import AboutECI from './components/AboutECI';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Home />
        <Form />
        <Services /><br /><br /><br /><br /><hr className='hr' />
        <MobileApps />
        <Contact />
        <Update />
        <AboutECI />
        <Footer />
      </Router>

    </div>
  );
}

export default App;
