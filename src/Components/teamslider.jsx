import React from 'react';
import tdata from '../data/teamdata';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,Autoplay]);


 const Teamslider=() => {
    return (
        <>
        <div className="container">
      <Swiper
        spaceBetween={40}
        slidesPerView={3}
        navigation
        autoplay
        loop={true}
        speed={400}
        breakpoints={ {
          1200: {
              slidesPerView: 3,
          },


          576: {
              slidesPerView: 2,
          },

          0: {
              slidesPerView: 1,
          },
      }
        }
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
        tdata.map((val,i)=>{
            return(
                <SwiperSlide key={i}>
                <div className="team" data-aos="fade-up" >
         <div className="team-image">
             <img src={`img/${val.image}`} alt={val.image}/>
         </div>
            <div className="team-content">
<h4>{val.name}</h4>
<p>{val.comment}</p>
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
  export default Teamslider;