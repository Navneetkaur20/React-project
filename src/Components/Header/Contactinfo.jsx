import React from 'react';
import {hdata} from '../../data/headercontact';

const HeadInfo =()=>{

return(
    <ul className="row"> 
{hdata.map((val,i) => {
    return(
      <li className="hcontact-list">
          <div class="icon">
              <i className={val.icon}></i>
          </div>
  <div className="contact-content">
      <p>{val.stitle}</p>
      <h4>{val.title}</h4>
  </div>

      </li>  
    )}

)
}

</ul>

)

}
export default HeadInfo;