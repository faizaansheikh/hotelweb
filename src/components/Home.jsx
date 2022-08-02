
import '../components/new.css'
import img2 from '../images/three.jpg'
import img3 from '../images/four.jpg'
import img1 from '../images/12.jpg'
import Rates from './Rates';
import Footer from './Footer';
import Mynavbar from '../components/Mynavbar';
import {BiRestaurant} from "react-icons/bi";
import {FaGlassMartini} from "react-icons/fa";
import {GiWeightLiftingUp} from "react-icons/gi";
import {AiFillCar} from "react-icons/ai";



function Home() {
  return (
    <>
    
    {/* <Mynavbar /> */}
    <div className="container-fluid aboutc">
      <div className="row">
      <div className="col-12 col-sm-12 col-md-5 aboutus">
      <h2 className='newh3' >WELCOME TO <span className='spen'>LUXUARY</span> HOTEL  </h2>
      <p className='discover' >"Discover a hotel that defines a new <br className='enable'/> dimension of luxuary"</p>
      </div>
      <div className="col-12 col-sm-12 col-md-7 picture">
      <img src={img1} width="100%" height={490} alt="" className='main'/>
      </div>
      </div>
    </div>

    {/* <div className='main'>
     <div className="container-fluid">
         <div className="row">
             <div className="col-12 col-sm-12 col-md-2"> </div>
             <div className="col-12 col-sm-12 col-md-8 welcome"> 
             <h1 className='wel'>WELCOME TO LUXUARY HOTEL</h1>
             </div>
             <div className="col-12 col-sm-12 col-md-2"> </div>
             <h3 className='book'>Book your dream resort destinations</h3>
            
         </div>
     </div>
         </div> */}
   
   {/* -- ---section end----- */}
   <div className="container">
        <div className="row">
         <div className="col-12 col-sm-12 col-md-3"></div>
         <div className="col-12 col-sm-12 col-md-6">
         <h2 className='sec'>WELCOME TO OUR <span className="spen">RESORT</span>
         </h2>
         <p className='p1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam architecto, nulla a error sequi numquam consequatur sint doloribus ullam provident illum enim nam, quis fugit rem totam rerum laudantium deleniti.nulla a error sequi numquam consequatur sint doloribus ullam provident illum enim nam, quis fugit rem totam rerum laudantium deleniti</p>
         </div>
         <div className="col-12 col-sm-12 col-md-3"></div>
        </div>
        </div> 
 
    <div className="container csec">
      <div className="row">
        <h2 className='feat'>FEATURED FACILITIES</h2>
      </div>
      <div className="row barrow">
      <div className="col-12 col-sm-12 col-md-3 bars">
       <h3 className='nec'><BiRestaurant size={50}/></h3> 
       <h3 className='color'>RESTAURANT</h3>
      </div>
      <div className="col-12 col-sm-12 col-md-3 bars" >
      <h3 className='neec'><FaGlassMartini size={45}/></h3> 
       <h3 className='color'>BARS</h3>
      </div>
      <div className="col-12 col-sm-12 col-md-3 bars">
      <h3 className='neec'><GiWeightLiftingUp size={50}/></h3> 
       <h3 className='color'>GYM</h3>
      </div>
      <div className="col-12 col-sm-12 col-md-3 bars">
      <h3 className='neec'><AiFillCar size={50}/></h3> 
       <h3 className='color'>PICKUP</h3>
      </div>
      </div>

       <div className="row rthird">
        <div className="col-12 col-sm-12 col-md-6" >
          <img className='img' src={img2} alt="" />
        </div>
        <div className="col-12 col-sm-12 col-md-6">
          <img className='img' src={img3} height="357px" alt="" />
        </div>
       </div>
      </div>

      
  <Rates />
  {/* <Footer /> */}
    </>
  );
}

export default Home;
