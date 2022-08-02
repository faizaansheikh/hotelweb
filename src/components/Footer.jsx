
import {BsFacebook} from "react-icons/bs";
import {AiFillTwitterCircle} from "react-icons/ai";
import {IoLogoWhatsapp} from "react-icons/io";
import {HiMailOpen} from "react-icons/hi";
import {SiGmail} from "react-icons/si";
import '../components/new.css'
import Mynavbar from '../components/Mynavbar';
import img5 from '../images/five.jpg'
import img6 from '../images/six.jpg'
import img7 from '../images/seven.jpg'
import img8 from '../images/eight.jpg'
function Footer() {
  return (
    <>
    <div className='mian'>
    <div className='container'>
    <div className="row frow">
    
    <div className="col-12 col-sm-12 col-md-2 one">
    <h2 className='quixk'>QUICK LINKS</h2>
    <ul>
    <li className='hom'>HOME</li>
    <li>ABOUT</li>
    <li>ROOMS</li>
    <li>LOCATION</li>
    <li>GALLERY</li>
    </ul>
    </div>
    <div className="col-12 col-sm-12 col-md-3 one">
    <h2 className='quixk'>ADDRESS</h2>
    <ul>
    <li className='hom'>MEXICO UNITED STATES 3000</li>
    <li>50019 HONEY STREET</li>
    <li>TO.MEXICO</li>
    <li>TELEPONE: +1 734 123-4567</li>
    <li>EMAIL : sheikhfaizan608@gmail.com</li>
    </ul>
    </div>
    <div className="col-12 col-sm-12 col-md-4 one">
    <h2 className='conect'>INSTAGRAM</h2>
    <img src={img5} alt="" className="insimage"/>
    <img src={img6} alt="" className="insimage"/>
    <img src={img7} alt="" className="insimage"/>
    <img src={img8} alt="" className="insimage"/>
    </div>
    <div className="col-12 col-sm-12 col-md-3 one">
    <h2 className='conect'>CONNECT WITH US</h2>
    <div className="hand">
    <BsFacebook size={55} className="fb"/>
    <AiFillTwitterCircle size={60} className="twit"/>
    <IoLogoWhatsapp size={55} className="wat"/>
    <HiMailOpen size={58} className="mal"/>
    <SiGmail size={55} className="gmal"/>
    </div>
    </div>
  </div>
  <div className="container">
  <div className="row">
  <div className="col-12 col-sm-12 col-md-1"></div>
  <div className="col-12 col-sm-12 col-md-10 mains">
  <h3 className="news">NEWSLETTER</h3>
  <p className="p5">Subscribe to our newsletter and we will inform you about newest projects and promotions.</p>
  <div className="flex">
  <form>
  <div class="mb-3">
  
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="center">
  <button  className="my-butons">SUBSCRIBE</button>
  </div>
</form>
</div>
</div>
<div className="col-12 col-sm-12 col-md-1"></div>
</div>
</div>


    </div>
    </div>


   
    </>
  );
}

export default Footer;
