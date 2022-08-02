import imgbed from '../images/bed.jpg'
import Footer from './Footer';
// import Navbar from './Navbar';
import imgA1 from '../images/d1.jpg'
import imgA2 from '../images/d2.jpg'
import imgA3 from '../images/d3.jpg'
import imgA4 from '../images/d4.jpg'
import Mynavbar from '../components/Mynavbar';
import '../components/new.css'
function Rooms() {
  return (
    <>
     {/* <Mynavbar /> */}
     <div className="container-fluid aboutc">
      <div className="row">
      <div className="col-12 col-sm-12 col-md-5 aboutus">
      <h2 className='newh2'>OUR <span className='spen'>ROOMS</span> </h2>
      <p className='discover'>"Discover a hotel that defines a new <br className='enable'/> dimension of luxuary"</p>
      </div>
      <div className="col-12 col-sm-12 col-md-7 picture">
      <img src={imgbed} width="100%" height={490} alt="" />
      </div>
      </div>
    </div>
 {/* =====end section====== */}

    <div className="container">
        <div className="row">
         <div className="col-12 col-sm-12 col-md-2"></div>
         <div className="col-12 col-sm-12 col-md-8">
         <h2 className='secs'>This Is An Elegant Hotel, Room Service Has And Unlisted Number</h2>
         </div>
         <div className="col-12 col-sm-12 col-md-2"></div>
        </div>
        </div> 

         {/* =====end section====== */}

         <div className="container room-main">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6">
            <img src={imgA1} width="100%" alt="" />
            <h2 className="newsec">Ullamcorper mattis, pulvinar in the dapibus.</h2> 
            <p className='newtest'>Leather detail shoulder contrastic colour contour stunning silhouette working <br /> peplum. <span className='spen-one'>$450/Night</span></p>
            </div>
            <div className="col-12 col-sm-12 col-md-6">
            <img className='set-img' src={imgA2} width="100%" height={385} alt="" />
            <h2 className="newsec">Ullamcorper mattis, pulvinar in the dapibus.</h2> 
            <p className='newtest'>Leather detail shoulder contrastic colour contour stunning silhouette working <br /> peplum. <span className='spen-one'>$699/Night</span></p>
            </div>
          </div>

          <div className="row sec-row">
            <div className="col-12 col-sm-12 col-md-6">
            <img className='set-img' src={imgA3} width="100%" height={408} alt="" />
            <h2 className="newsec">Ullamcorper mattis, pulvinar in the dapibus.</h2> 
            <p className='newtest'>Leather detail shoulder contrastic colour contour stunning silhouette working <br /> peplum. <span className='spen-one'>$850/Night</span></p>
            </div>
            <div className="col-12 col-sm-12 col-md-6">
            <img className='set-img' src={imgA4} width="100%" height={405} alt="" />
            <h2 className="newsec">Ullamcorper mattis, pulvinar in the dapibus.</h2> 
            <p className='newtest'>Leather detail shoulder contrastic colour contour stunning silhouette working <br /> peplum. <span className='spen-one'>$799/Night</span></p>
            </div>
          </div>
         </div>

         {/* =====end section====== */}
         <div className="container room-main">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6">
            <h2 className="ullam">Ullamcorper mattis,<br /> pulvinar dapibus.</h2>
            <p className="leather-new">Leather detail shoulder contrastic colour <br /> contour stunning silhouette working peplum. <br /> Statement buttons cover-up tweaks patch.</p>
            </div>
            <div className="col-12 col-sm-12 col-md-6">
            <form>
              <h2 className='bok-a'>BOOK A ROOM</h2>
              <input className='input-text' type="text" placeholder='Check In'/> <br /> 
              <input className='input-text' type="text" placeholder='Check Out'/> <br />
              <div className="dropdown">
              <a className="btn btn-secondary dropdown-toggle myedit" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
             Room
             </a>

             <ul className="dropdown-menu menus" aria-labelledby="dropdownMenuLink">
             <li><a className="dropdown-item" href="#">Special Room</a></li>
             <li><a className="dropdown-item" href="#">Luxuary Room</a></li>
            <li><a className="dropdown-item" href="#">Vip Room</a></li>
            </ul>
            </div>
            <div className="dropdown">
              <a className="btn btn-secondary dropdown-toggle myedit" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
             Guest
             </a>

             <ul className="dropdown-menu menus" aria-labelledby="dropdownMenuLink">
             <li><a className="dropdown-item" href="#">Guest 1</a></li>
             <li><a className="dropdown-item" href="#">Guest 2</a></li>
            <li><a className="dropdown-item" href="#">Guest 3</a></li>
            </ul>
            </div> <br />
            <button className='check-btn'>Check Availability</button>
            </form>
            </div>
          </div>
          </div>
         
     {/* <Footer /> */}
    </>
   


  );
}

export default Rooms;
