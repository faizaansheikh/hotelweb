
import img9 from '../images/nine.jpg'
import img10 from '../images/tens.jpg'
import imgA from '../images/a.jpg'
import imgB from '../images/b.jpg'
import imgC from '../images/c.jpg'
import '../components/new.css'

import Navbar from './Navbar';
import Mynavbar from '../components/Mynavbar';
function About() {
  return (
    <>
   {/* <Mynavbar /> */}
    <div className="container-fluid aboutc">
      <div className="row">
      <div className="col-12 col-sm-12 col-md-5 aboutus">
      <h2 className='newh2' >ABOUT <span className='spen'>US</span> </h2>
      <p className='discover'  >"Discover a hotel that defines a new <br className='enable'/> dimension of luxuary"</p>
      </div>
      <div className="col-12 col-sm-12 col-md-7 picture">
      <img src={img9} width="100%" alt="" />
      </div>
      </div>
    </div>

        {/* =====end section====== */}

        <div className="container">
        <div className="row">
         <div className="col-12 col-sm-12 col-md-2"></div>
         <div className="col-12 col-sm-12 col-md-8">
         <h2 className='secs'>No matter how nice a hotel is, it's not home.</h2>
         </div>
         <div className="col-12 col-sm-12 col-md-2"></div>
        </div>
        </div> 
      
  {/* =====end section====== */}

        <div className="container cthird">
      <div className="row">
      <div className="col-12 col-sm-12 col-md-6 texxt">
        <h2 className='sec'>Ullamcorper mattis,<br /> pulvinar dapibus.</h2>
        <p className='Leather'>Leather detail shoulder contrastic colour <br /> contour stunning silhouette working peplum. <br /> Statement buttons cover-up tweaks patch.</p>
        <button className='learn-btn'>LEARN MORE</button>
      </div>
      <div className="col-12 col-sm-12 col-md-6 pic2" >
        <img src={img10} width="100%"  alt="" />
      </div>
      </div>
    </div>
{/* =====end section====== */}
<div className="container">
<h2 className='secss'>Our Hotel Beautiful Accomadation</h2>
<div className="card-group">
  <div className="card">
    <img src={imgC} className="card-img-top bor" height={242} alt="..."/>
    <div className="card-body">
      <h5 className="card-title secss">Relaxing <br /> Rooms</h5>
      <p className="card-text leather">Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch.</p>
    </div>
</div>
<div className="card">
    <img src={imgA} className="card-img-top bor" alt="..."/>
    <div className="card-body">
      <h5 className="card-title secs">Wine <br /> Shop </h5>
      <p className="card-text leather">Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch.</p>
    </div>
</div>

<div className="card">
    <img src={imgB} className="card-img-top bor" alt="..."/>
    <div className="card-body">
      <h5 className="card-title secs">Sky<br /> View</h5>
      <p className="card-text leather">Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch.</p>
    </div>
</div>
</div>
</div>
    {/* <Footer /> */}
    </>
  );
}

export default About;
