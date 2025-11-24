"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import correct modules for Swiper 10.3.1
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import testimonials from "./data";
import Testimonial from "./Testimonial";

import "./testimonials.css";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>What My Clients Say</h2>
      <p>These are unbiased testimonials from some of my clients</p>

      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            601: { slidesPerView: 2 },
            1025: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
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
