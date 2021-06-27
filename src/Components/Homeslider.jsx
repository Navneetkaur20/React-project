import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y , Autoplay} from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,Autoplay]);

 const Homeslider=() => {
    const sliderdata=[
        {
           img:'slide1.jpg',
           stitle:'feel the difference with us',
           title:"Your Health ",
           span:"Is Our Priority"
        },
        {
            img:'slide2.jpg',
            stitle:'feel the difference with us',
            title:"Your Health" ,
            span:"Is Our Priority"
         },
         {
            img:'slide1.jpg',
            stitle:'feel the difference with us',
            title:"Your Health",
            span:"Is Our Priority"
         },
    ]
    const soption={
     
        slidesPerView:1,
        navigation:true,
        loop:true,
        speed:500,
        autoplay:true,
     
       
    }
    return (
        <>
       
      <Swiper className="homeslider"
      {...soption}
      >
        {sliderdata.map( (val,i) =>{
return(
    <SwiperSlide key={i}>
<div className="banner" style={ {backgroundImage:`url(img/${val.img})`} }>
    <div className="container bcontent " >
    <p>{val.stitle}</p>
<h1>{val.title} <span>{val.span}</span></h1>
<a href="#" className="site-btn">Services</a>
</div>
</div>


    </SwiperSlide>

)
   })
    }
      </Swiper>
     
      </>
    );
  };
  export default Homeslider;