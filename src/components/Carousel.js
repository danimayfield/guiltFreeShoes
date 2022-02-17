import { useState } from "react";
import Slider from "react-slick";

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";

import '../styles/App.css'


const Carousel = () => {
  const [imageIndex, setImageIndex] = useState(0)
  
  const images = [img1, img2, img3, img1, img2, img3];

  const alt = (img) => {
    if (img === img1) {
      return "Pair of colorful Nike Air running shoes"
    } else if (img === img2) {
      return "Model jumping in the air at sunset"
    } else if (img === img3) {
      return "Cream colored shoe posing on tip of toe"
    } else {
      console.error("You have a new photo, make sure to add the appropriate alt text for that image");
    }
  }
  
  const settings = {
    infinite: true,
    lazyload: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true,
    beforeChange: (current, next) => setImageIndex(next)
  }

  return (
    <div className="carousel">
      <Slider {...settings}>
        {
          images.map((img, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"} key={idx}>
              <img src={img} alt={alt(img)} />
            </div>
          ))
        }
      </Slider>
    </div>
  );
};

export default Carousel;
