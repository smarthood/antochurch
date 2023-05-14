import React from 'react'
import './main.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import BasicCarousel from '../components/BasicCarousel ';
export default function Main() {
  const ItemData = [1, 2, 3, 4, 5, 6, 7]

  const slides = [
    { url: "./img/banner_1.jpg", title: "Banner1" },
    { url: "./img/banner_2.jpg", title: "Banner2" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div className="container">
      <div style={containerStyles}>
        <BasicCarousel slides={slides} />
      </div>
      <h1 className="heading"></h1>
      <hr />
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {ItemData.map((item) => (
          <SwiperSlide>
            <img src={`img/${item}.jpg`} alt="slide_image" />
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </div>
      </Swiper>
    </div>
  )
}
