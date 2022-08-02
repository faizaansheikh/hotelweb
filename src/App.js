import Home from './components/Home';
// import one from '../src/one.jpg'
import { Route, Router, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import About from './components/About';
import Rooms from './components/Rooms';
import Mynavbar from './components/Mynavbar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {BsFillArrowUpCircleFill} from "react-icons/bs";
function App() {
  const top = ()=>{
    window.scrollTo(0, 0);
  }
  return (
   <>
   {/* <Home /> */}
   {/* <About /> */}
   {/* <Rooms /> */}
   {/* <Contact /> */}
   {/* <Navbar /> */}
   <Mynavbar />
   <span onClick={top} className="top"><BsFillArrowUpCircleFill className='top_btn' size={55}/></span> 
   <Routes>
    <Route path="/" element = {<Home />}/>
    <Route path="/about" element = {<About />}/>
    <Route path="/rooms" element = {<Rooms />}/>
    <Route path="/contact" element = {<Contact />}/>
   </Routes>
   <Footer />
   </>
  );
}

export default App;
