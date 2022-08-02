import Footer from './Footer';
import Navbar from './Navbar';
import '../components/new.css'
import con1 from '../images/c1.jpg'
import imgbed from '../images/bed.jpg'
import {BiHome} from "react-icons/bi";
import {BiMobile} from "react-icons/bi";
import {FiMail} from "react-icons/fi";

import Mynavbar from '../components/Mynavbar';

function Contact() {
  return (
    <>
   {/* <Mynavbar /> */}
    <div className="container-fluid aboutc">
      <div className="row">
      <div className="col-12 col-sm-12 col-md-5 aboutus">
      <h2 className='newh2'>CONTACT <span className='spen'>US</span> </h2>
      <p className='discover'>"Discover a hotel that defines a new <br className='enable'/> dimension of luxuary"</p>
      </div>
      <div className="col-12 col-sm-12 col-md-7 picture">
      <img className='set-img' src={con1} width="100%" height={490} alt="" />
      </div>
      </div>
    </div>
 {/* =====end section====== */}

 <div className="container">
        <div className="row">
         <div className="col-12 col-sm-12 col-md-2"></div>
         <div className="col-12 col-sm-12 col-md-8">
         <h2 className='secs'>OUR LOCATION</h2>
         </div>
         <div className="col-12 col-sm-12 col-md-2"></div>
        </div>
        </div> 

         {/* =====end section====== */}

    <div className="container map">
    <div className="row">
    <iframe width={760} height={500} className="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=2880 Broadway, New York&amp;t=k&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    </div>
    </div>
 
  {/* =====end section====== */}

  <div className="container last-one">
    <div className="row">
    <div className="col-12 col-sm-12 col-md-7">
    <h2 className='get-in'>Get In Touch</h2>
    <div className="form-floating">
  <textarea className="form-control rows"  placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Enter message here</label>
</div>

<div className="row g-2 my-inputs">
  <div className="col-md">
    <div className="form-floating">
      <input type="text" className="form-control" placeholder="Enter Your Name" />
      <label for="floatingInputGrid">Enter Your Name</label>
    </div>
  </div>
  <div className="col-md">
    <div className="form-floating">
      <input type="email" className="form-control" placeholder="Email" />
      <label for="floatingInputGrid">Email</label>
    </div>
  </div>

 </div>
   <input className="form-control form-control-lg subject" type="text" placeholder="Enter Subject" aria-label=".form-control-lg example"></input>
  <button className='submit-btn'>SEND</button>
    </div>
    <div className="col-12 col-sm-12 col-md-5 final">
     
      <div className='home-icon'>
     <BiHome size={45}/>
     <h3 className='btn-wood'>Buttonwood, California. <br /> <span className='change-color'>Rosemead, CA 91770</span>  </h3>
     </div>

     <div className='home-icon mobile'>
     <BiMobile size={45}  />
     <h3 className='btn-wood'>+1 253 565 2365 <br /> <span className='change-color'>Mon to Fri 9am to 6pm</span>  </h3>
     </div>

     <div className='home-icon msg'>
     <FiMail size={40}/>
     <h3 className='btn-wood'>support@colorlib.com <br />
      <span className='change-color'>Send us your query anytime!</span>  </h3>
     </div>

     </div>
    </div>
  </div>
    {/* <Footer /> */}
    </>
  );
}

export default Contact;
