import React from 'react';
import { Link } from "react-router-dom";
import  sdata from '../data/Servicedata';

  const Servicecontainer=()=>{
let servicelist=sdata.map((s,i)=>{
  const {id}=s;
return (
<div className="service-item" key={i} data-aos="fade-up">
<div className="service-icon">
<i className={s.icon}></i>
</div>
<div className="service-content">
    <h2>{s.title}</h2>
    <p>{s.sdesc}</p>
    <Link to={`/sdetails/${id}` } className="site-btn">Read More</Link>
    {/* <Link to={`sdeatils/${id}`}>Read More</Link> */}
</div>
</div>)

})
return(
<div className="row service_block">
    {servicelist}

</div>

)


}
export default Servicecontainer;