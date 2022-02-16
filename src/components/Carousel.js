import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";

const Carousel = () => {
  return (
    <div>
      <div>
        <img src={img1} alt="Colorful Nike Air running shoes" />
      </div>
      <div>
        <img src={img2} alt="Woman jumping in the air at sunset" />
      </div>
      <div>
        <img src={img3} alt="Cream colored shoe posing on tip of toe" />
      </div>
    </div>
  );
};

export default Carousel;
