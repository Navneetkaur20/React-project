import React from "react";
const PageBaner=(props)=>{
  const {image,subtitle,maintitle}=props;
return(
<div className="pageBanner" style={ {backgroundImage:`url(  ${image})`}}>
  
<div className="container">
                <div className="row">
                <div className="title" data-aos="zoom-out">
    <p>{subtitle}</p>
    <h1>{maintitle}</h1>

</div>
</div>
</div>
</div>

)

}
export default  PageBaner;