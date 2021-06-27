import React from 'react'; 

const Sectiontitle=(props)=>{
return(
<div className="title" data-aos="fade-up">
    <p>{props.subtitle}</p>
    <h1>{props.maintitle}</h1>

</div>

)

}
export default  Sectiontitle;