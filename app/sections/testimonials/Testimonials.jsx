"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import testimonials from "./data";
import Testimonial from "./Testimonial";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <section id="testimonials" dir="rtl">
      <h2>מה לקוחות אומרים</h2>
      <p>כמה מילים מלקוחות שבנו איתי אתר לעסק שלהם</p>

      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          breakpoints={{
            601: { slidesPerView: 2 },
            1025: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2800, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <Testimonial testimonial={t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
