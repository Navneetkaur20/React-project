import React from 'react';
import { Link } from 'react-router-dom';
const Footer=()=>{
    return(
       <footer className="space ">
           <div className="container">
           <div className="row">
               <div className="col-6" data-aos="fade-up">
                   <h1>Info</h1>
                   <p>Sed elit quam, iaculis sed semper sit amet
                        udin vitae nibh at magna akal semperFusce.</p>
                        <ul>
                           
                 <li><i className="icofont-location-pin"></i>
                 69 Halsey St, New York, Ny 10002, United States.</li>
                 <li><i className="icofont-email"></i>   
hello@yourdomain.com</li>

                        </ul>
               </div>
               <div className="col-6" data-aos="fade-up">
                   <h1>Useful Links</h1>
                        <ul>
                           
                 <li><Link to ='/'>Home</Link></li>
                 <li><Link to ='/about"'>About</Link></li>
                 <li><Link to ='/services'>Services</Link></li>
                 <li><Link to ='/contact'>Contact</Link></li>
                

                        </ul>
               </div>
               </div>
           </div>
       </footer> 
    )
}
export default Footer;