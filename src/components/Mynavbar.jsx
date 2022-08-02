
import { useState } from 'react';
import {NavLink} from 'react-router-dom';
// import '../components/new.css'
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineClose} from "react-icons/ai";

import '../components/navbar.css'
function Mynavbar() {
    const [Mobile , setMobile] = useState(true)
    const [color , setcolor] = useState(false)
  const changeColor = () =>{
    if(window.scrollY >= 50){
      setcolor(true)
    }else{
      setcolor(false)
    }
  } 
  window.addEventListener('scroll',changeColor)
  return (
  
   <>
    {/* ==mobile-ul==== */}
  {/* ==my-ul=== */}
<div className= {color?"navbar-bg": "nav-bar"}>
    <div className="logo">
    <h2 className='logo-font'><span className='x'>X</span>Resort</h2> 
    </div>
    <div className="linkss">
    <ul className={Mobile?"my-ul":"mob-ul"}
    activeClassName
    >
    <li className='my-li'><NavLink onClick={()=>setMobile(true)} className='my-Link home active' to="/">Home</NavLink> </li>
    <li className='my-li'><NavLink onClick={()=>setMobile(true)}  className='my-Link about' to="/about">About</NavLink></li>
    <li className='my-li'><NavLink onClick={()=>setMobile(true)}  className='my-Link rooms' to="/rooms">Rooms</NavLink></li>
    <li className='my-li'> <NavLink onClick={()=>setMobile(true)}  className='my-Link bookings' to="/contact">Booking</NavLink></li>
    <button className="my-buton">BOOK NOW</button>
    </ul>
   
  <div className="hamburger-menu">
    {Mobile?  <GiHamburgerMenu onClick={()=>setMobile(false)} className='collapse-icon' size={45}/>: <AiOutlineClose onClick={()=>setMobile(true)} className='cross-icon'
    size={35} />}
  
  </div>
    </div>
   </div>
  
   </>
  );
}

export default Mynavbar;
