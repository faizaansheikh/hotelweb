
import {Link} from 'react-router-dom';
import '../components/new.css'
function Navbar() {
  return (
   <>
   
 
    <nav className="navbar navbar-expand-lg  nav">
  <div className="container-fluid">
    <a className="navbar-brand logo" href="#">Xresort</a>
    <button className="navbar-toggler togle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 cen">
        <li className="nav-item lis">
          <a className="nav-link active anchor" aria-current="page" href="#">
           <Link className='my-Link' to="/">Home</Link> </a>
        </li>
        <li className="nav-item lis">
          <a className="nav-link active anchor" aria-current="page" href="#">
             <Link className='my-Link' to="/about">About</Link></a>
        </li>
        <li className="nav-item lis">
          <a className="nav-link active anchor" aria-current="page" href="#">
             <Link className='my-Link' to="/rooms">Rooms</Link></a>
        </li>
        <li className="nav-item lis">
          <a className="nav-link active anchor" aria-current="page" href="#">
             <Link className='my-Link' to="/contact">Booking</Link></a>
        </li> 
        
        
        
      </ul>
      <form className="d-flex fom">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>

</nav>
   </>
  );
}

export default Navbar;
