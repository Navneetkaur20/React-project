import React from 'react';
import { Link } from "react-router-dom";
import  sdata from '../data/Servicedata';
import PageBaner  from '../Components/Pagebanner';
function About(){
    return(
        <div>
           
            <PageBaner image="img/about.jpg"
    subtitle="HOPE MEDICAL CENTER"
     maintitle={['About ' ,<span> Hope</span>]}/>
     <div className="about-block space">
         <div className="container">
         <h1>We make digital products and help organistation big and small connect with their audience.</h1>
         <h2>SERVICES</h2>
<p>In a word,It was a big, round room with a high arched roof, and the walls
     and ceiling and floor were covered with large emeralds set closely together. the whale was seized and sold, and his Grace the Duke of Wellington received the money. Thinking that viewed in some particular lights, the case might by a bare possibility in some small degree be deemed, under the circumstances,
     a rather hard one, an honest clergyman of the town addressed a note to his Grace.</p>
         
<div className="Service-links">
<ul className="row">
{sdata.map((ele,i)=>{
    return(
      <li className="col-4"> <Link to={`/sdetails/${ele.id}` } className="site-btn">{ele.title}</Link></li>
  
    )
    
  })}
     </ul>
     <div className="slink">
     <Link to="/services" className="site-btn bg">Go To Services</Link>
     </div>
    
</div>
     </div>
</div>

       </div>
)
}

export default About;