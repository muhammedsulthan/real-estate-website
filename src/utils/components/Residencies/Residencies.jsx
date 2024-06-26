import React from 'react';
import{Swiper,SwiperSlide,useSwiper}from 'swiper/react';
import 'Swiper/css';
import './Residencies.css';
import data from '../../../utils/slider.json'; 
import { sliderSettings } from '../../common';
const Residencies = () => {
  return (
 <section>
<div id='rescidenies' className="r-container paddings innerWidth">
  <div className="r-head flexColStart">
    <span className=' orangeText'>Best Choices</span>
    <span className='primaryText'>Popular Residencies</span>
  </div>
  <Swiper {...sliderSettings}>
    <SliderButtons/>
    {
    data.map((card,i) =>(
      <SwiperSlide key={i}>
        <div className=' r-card flexColStart '>
        <img src={card.image} alt="home" />

        <span className="r-price secondaryText">
          <span style={{color:"orange"}}>$</span><span>{card.price}</span>
        </span>

        <span className='primaryText'>{card.name}</span>
        <span className='secondaryText'>{card.detail}</span>
        </div>

      </SwiperSlide>
    ))
  }

  </Swiper>
</div>
</section>
  )
}

export default Residencies;

const SliderButtons = () =>{
  const swiper=useSwiper();
  return(
    <div className="flexCenter r-buttons">
      <button onClick={()=> swiper.slidePrev()}>&lt;</button>
      <button onClick={()=> swiper.slideNext()}>&gt;</button>
    </div>
  )
}
