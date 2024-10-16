import React from 'react'
import Slider from "react-slick";
import { sliderArray } from '../../../db/db';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true
      };

  return (
    <div>
        <Slider {...settings}>
        {
          sliderArray.map((el, index) => {
            return < img src={el} key={index}/>
          })
        }
      </Slider>
    </div>
  )
}

export default HomeSlider