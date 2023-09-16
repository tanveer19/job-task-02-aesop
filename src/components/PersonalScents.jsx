import React, { useRef, useState } from "react";

import { FaArrowRight } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./PersonalScents.css";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

const PersonalScents = () => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" ml-32">
            <p className="text-xl">Fragrance</p>
            <h3 className="text-3xl my-5">Our Personal scents</h3>
            <p className="text-xl mb-5">
              Unorthodox, evocative, and refined, Aesop fragrances are sensory
              bridges to memory and connection points to those around us
            </p>
            <a target="_blank" href="https://www.aesop.com/hk/en/c/fragrance/">
              See all Fragrance
              <span className="inline-block mx-1">
                <FaArrowRight></FaArrowRight>
              </span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <img src="   https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png" />
            <a href="https://www.aesop.com/hk/en/p/fragrance/ouranon/ouranon-eau-de-parfum/">
              <span className="hover:underline">Ouranon Eau de Parfum</span>
              <br />
              Woody, spicy, resinous
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <img src="https://www.aesop.com/u1nb1km7t5q7/5JnjTiylieRSYutnMFeyVK/0c78718d9172cd5384064512e06f0b52/Aesop_Fragrance_Gloam_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png" />
            <a href="https://www.aesop.com/hk/en/p/fragrance/gloam/gloam-eau-de-parfum/">
              <span className="hover:underline">Gloam Eau de Parfum</span>
              <br />
              Floral, spicy, green
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <img src="https://www.aesop.com/u1nb1km7t5q7/6otLbkgZuAv2oDJ3UG3r53/752eb0a5fe1f836a105247851d0200b8/Aesop_Fragrance_Eidesis_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png" />
            <a href="https://www.aesop.com/hk/en/p/fragrance/eidesis/eidesis-eau-de-parfum/">
              <span className="hover:underline">Eidesis Eau de Parfum</span>
              <br />
              Woody, spicy, ambery
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <img src="https://www.aesop.com/u1nb1km7t5q7/J4lTP53G5Qg3MtFjmhnRW/945d6746058105e97c0552e3b0fbf54b/Aesop_Fragrance_Eremia_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png" />
            <a href="">
              <span className="hover:underline">Erémia Eau de Parfum</span>
              <br />
              Green, floral, citrus
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <img src="https://www.aesop.com/u1nb1km7t5q7/4xJBSrjM8KCIc1c98Y2V08/38105def050ed90c4f47b58a22c32f97/Aesop_Fragrance_Miraceti_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png" />
            <a href="">
              <span className="hover:underline">Miraceti Eau de Parfum</span>
              <br />
              Resinous, woody, spicy
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <img src="https://www.aesop.com/u1nb1km7t5q7/cc3b7QvhMcApvi0MCw9Xa/c2f5d7e204d7f2e9a5be48aaf66aff3d/Aesop_Fragrance_Karst_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png" />
            <a href="">
              <span className="hover:underline">Karst Eau de Parfum</span>
              <br />
              Fresh, herbaceous, marine
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PersonalScents;
