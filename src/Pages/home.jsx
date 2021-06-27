import React from 'react';
import Sectiontitle from '../Components/Sectiontitle';
import Chosecontainer from '../Components/Chosecontainer';
import Homeslider from '../Components/Homeslider';
import Teamslider from '../Components/teamslider';
import Reviewslider from '../Components/reviewSlider';
import Accordion from '../Components/Accordion';
import GoogleMap from '../Components/map';
function home(){

    return(
      <>

<Homeslider/>
    <section className="choose space">
        <div className="container">
        <Sectiontitle subtitle="WHY CHOOSE HOPE MEDICAL"
     maintitle={['The Best ' ,<span> For Your Health</span>]}
        />
          <Chosecontainer />  
        </div>
    </section>

    <section className="team-block space">
        <div className="container">
        <Sectiontitle subtitle="MEET OUR DOCORS"
     maintitle={['Professional & ' ,<span> Enthusiastic</span>]}
        />
    <Teamslider/>
    </div>
    </section>




    <section className="faq-block space">
        <div className="container">
        <Sectiontitle
     maintitle={['FAQs',<span> From Clients</span>]}
     />
   <Accordion/>
        
  
    </div>
    </section>


    <section className="review-block space" style={{backgroundImage:`url(img/testimonial.jpg)`}}>
        <div className="container">
    <Sectiontitle subtitle="TESTIMONIAL"
     maintitle={['Trusted ' ,<span> From Clients</span>]}
        />
    <Reviewslider/>
    </div>
    </section>
<GoogleMap/>
    </>
    )

}

export default home;