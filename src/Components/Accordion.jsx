import React , {Component, useState} from 'react';
import accordiondata from '../data/accordiondata';

const  Accordion=()=> {
const [selected,setselected]=useState();
const toggle=(i)=>{
    if(selected===i){
        return setselected(null);
    }
    setselected(i);
}
let accordion  =  accordiondata.map((val,i)=>{
    return(
<div className="accordion">
<div className="c-content">
    <div className={selected===i?'accordion-head a-active row between':'accordion-head row between'} onClick={()=>toggle(i)}>
    <h3>{val.name}</h3>
    <span>{selected===i?'-':'+'}</span>
    </div>
    <div className={selected===i ?'accordion-text show':'accordion-text'} >
    <p>{val.text}</p>
    </div>
</div>
</div>
    )

})

return(
    <div className="choose-block" data-aos="fade-up">
  
{accordion}

    </div>

)
}
export default Accordion;

