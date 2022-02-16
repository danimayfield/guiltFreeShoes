import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
// import "swiper/scss/effect-cube";

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";

const Carousel = () => {

  // init Swiper:
  const swiper = new Swiper(".swiper", {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
      speed: 400,
      spaceBetween: 100,
      allowSlideNext: true,
      allowSlidePrev: true,
      allowTouchMove: true,
      loop: true,

  });
  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        <img className="swiper-slide" src={img1} alt="Colorful Nike Air running shoes" />
        <img className="swiper-slide" src={img2} alt="Woman jumping in the air at sunset" />
        <img className="swiper-slide" src={img3} alt="Cream colored shoe posing on tip of toe" />
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default Carousel;
