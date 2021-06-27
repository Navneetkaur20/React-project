import React from 'react';

import Sectiontitle from '../Components/Sectiontitle';
import PageBaner  from '../Components/Pagebanner';
import Servicecontainer from '../Components/Servicecontainer';
const Services =()=>{
return(
    <div className="">  

   <PageBaner image="img/main-slide-01.jpg"
    subtitle="BEST SOLUTION FOR YOUR HEATLH"
     maintitle={['Services' ,<span> That We Provide</span>]}/>


<section className="space ">
    <div className="container">
    <Sectiontitle  subtitle="OUR SERVICES"
     maintitle={['Best Solution',<span> For Your Health</span>]}/>

    <Servicecontainer/>
    </div>
</section>



    </div>
 

)

}

export default Services;