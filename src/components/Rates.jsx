
import {FaBed} from "react-icons/fa";
import '../components/new.css'
function Rates() {
  return (
    <>
    <div className="container">
        <div className="row raterow">
        <h2 className='feat'>RATES AND BOOKING</h2>
       
        <div className="col-12 col-sm-12 col-md-3">
            <div className='booking'>
            <div className='cdiv'><p className='single'>SINGLE ROOM</p></div>
            <div className='posi'> <h1 className='sixe'>79$</h1>
            <p className='sixes'>1 night</p>
            
            </div> 
            </div>
            <div className="wit">
            <FaBed className="chan" size={70}/>
            <button className="btns">Book now</button>
            </div>
        </div>

        <div className="col-12 col-sm-12 col-md-3">
            <div className='booking2'>
            <div className='cdiv2'><p className='single'>THE COTTAGE</p></div>
            <div className='posi'> <h1 className='sixe'>119$</h1>
            <p className='sixes'>1 night</p>
            
            </div> 
            </div>
            <div className="wit">
            <FaBed className="chan2" size={70}/>
            <button className="btn2">Book now</button>
            </div>
        </div>

        <div className="col-12 col-sm-12 col-md-3">
            <div className='booking3'>
            <div className='cdiv3'><p className='single'>GUEST HOUSE</p></div>
            <div className='posi'> <h1 className='sixe'>159$</h1>
            <p className='sixes'>1 night</p>
            
            </div> 
            </div>
            <div className="wit">
            <FaBed className="chan3" size={70}/>
            <button className="btn3">Book now</button>
            </div>
        </div>

        <div className="col-12 col-sm-12 col-md-3" >
            <div className='booking4'>
            <div className='cdiv4'><p className='single'>SEA VILLA</p></div>
            <div className='posi'> <h1 className='sixe'>199$</h1>
            <p className='sixes'>1 night</p>
            
            </div> 
            </div>
           
            <div className="wit">
            <FaBed className="chan4" size={70}/>
            <button className="btn4">Book now</button>
            </div>
        </div>
        </div>
    </div>
    </>
  );
}

export default Rates;
