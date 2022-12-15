
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'
import Contact from './components/Contact';
import  Services from './components/Services'
import About from './components/About';
import Gallery from './components/Gallery';
import Notfound from './components/Notfound';

function App() {
  return (
    <Router>
      <Header></Header>
      
      <Routes>
        <Route exact path="" element={<Home></Home>}></Route>
        <Route exact path="/contact" element={<Contact></Contact>}></Route>
        <Route exact path="/services" element={<Services></Services>}></Route>
        <Route exact path="/gallery" element={<Gallery></Gallery>}></Route>
        <Route exact path="/about" element={<About></About>}></Route>

      <Route exact path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
