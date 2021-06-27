import React from 'react';
import rdata from '../data/reviewdata';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,Autoplay]);


 const Reviewslider=() => {
    return (
        <>
        <div className="container">
      <Swiper
        spaceBetween={40}
        slidesPerView={1}
        navigation
        autoplay
        loop={true}
        speed={500}
  //   breakpoints={{
  //   // when window width is >= 640px
  //                    320: {
  //     width: 320,
  //     slidesPerView: 1,
    
  //   },
  //   480: {
  //     width: 480,
  //     slidesPerView: 1,
  //   },
  //   // when window width is >= 768px
  //   992: {
  //     width: 992,
  //     slidesPerView: 3
  //   }
      
  // }}
      >
        
        {
        rdata.map((val,i)=>{
            return(
                <SwiperSlide key={i} >
                <div className="review" data-aos="fade-up">
         <div className="review-image">
             <img src={`img/${val.image}`} alt={val.image}/>
         </div>
            <div className="review-content">

<p class="r-text">{val.text}</p>
<h4>{val.name}</h4>
<p>{val.location}</p>
            </div>
            </div>
            </SwiperSlide>
            )}
        )
        }
     
      </Swiper>
      </div>
      </>
    );
  };
  export default Reviewslider;