// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

const images = [
  "/src/assets/images/hero/c1.jpg",
  "/src/assets/images/hero/c3.jpg",
  "/src/assets/images/hero/c4.jpg",
];

const HeroSlider = () => {
  return (
    <header>
      <div className="relative">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          speed={3000}
          modules={[EffectFade, Navigation, Autoplay]}
          className="mySwiper"
        >
          {images?.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} className="d-block w-100" alt="..." />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </header>
  );
};

export default HeroSlider;
