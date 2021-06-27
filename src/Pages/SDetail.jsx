import React, { useEffect } from 'react';
import { useParams,useLocation} from 'react-router';
import { NavLink } from 'react-router-dom';
import  sdata from '../data/Servicedata';
import Accordion from '../Components/Accordion';
import Sectiontitle from '../Components/Sectiontitle';
function SDetail(){
var isActive;
  const {id}=useParams(); 
  const location=useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
console.log(splitLocation[2])
 

  // const isActive=location.pathname == id;
  // const splitLocation = pathname.split("/");
  // console.log(splitLocation[2])
 
return(
  <div className="container">
    <div className="service-detail space">
      <div className="row">
<div className="col-3">
  <ul className="serviceSidebar">
{sdata.map((ele,i)=>{
   
    return(
      < li key={i} >
     <NavLink to={`/sdetails/${ele.id}`} activeClassName="nav-service"   >{ele.title}</NavLink>
      </li>
    )
    }
  )}
</ul>
</div>

<div className="col-7"> 
  {sdata.map((ele,i)=>{
    if(ele.id==id){
    return(
      < div key={i}>
      <h1>{ele.title}</h1>
      <img src={`../img/${ele.img}`}/>
      <p>{ele.text}</p>
      <p>{ele.excert}</p>
      </div>
    )
    }
  })}
</div>
</div>

<div className="accordion-section">
<Sectiontitle  maintitle={['FAQs',<span> From Clients</span>]} />
  <Accordion/>
</div>
  </div>
  </div>
)
 }

export default SDetail;