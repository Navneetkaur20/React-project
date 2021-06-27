import React  from 'react';
import cdata from '../data/choose';

const Chosecontainer=()=>{

let clist  = cdata.map((val,i)=>{
    return(
<div className="chose_item" key={i}>
<div className="c-icon">
    <i className={val.icon}></i>
</div>
<div className="c-content">
    <h3>{val.title}</h3>
    <p>{val.desc}</p>
</div>
</div>
    )

})

return(
    <div className="choose-block " data-aos="fade-up">
<div className="row">   
{clist}
</div>
    </div>

)
}
export default Chosecontainer;

