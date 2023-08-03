import './App.css';
import Home from './Pages/Home.jsx'
import About from './Components/About.jsx'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import Contact from './Components/Contact.jsx'
import Testimonial from './Components/Testimonial.jsx'
import Work from './Components/Work.jsx'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/testimonial" element={ <Testimonial /> } />
        <Route path="/work" element={ <Work /> } />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;