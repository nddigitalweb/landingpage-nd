import TeamMemberCard from "./TeamMemberCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "./swiperSlide.css";

export default function App(props) {
  const { slides } = props || {};
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slides
          ? slides.map((slide) => (
              <SwiperSlide>
                <TeamMemberCard name={slide.name} role={slide.role} />
              </SwiperSlide>
            ))
          : "error"}
      </Swiper>
    </>
  );
}
