import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

import Carousel from "./components/Carousel";



const App = () => {
  // init Swiper:
  const swiper = new Swiper(".swiper", {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
  });

  return (
    <div>
      <section>
        <h1>Welcome to Guilt Free Shopping</h1>
          <Carousel/>
        <button>Start Shopping</button>
      </section>
      <section>
        <form action="">
          <label htmlFor="email" className="visuallyHidden">
            Email Address:
          </label>
          <input type="email" name="email" id="email" placeholder="Email" />
          <label htmlFor="password" className="visuallyHidden">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <input type="submit" value="SIGN IN" className="button" />
        </form>
        <div className="button">
          <p>Facebook</p>
          <i>{FaFacebookF}</i>
        </div>
        <div className="button">
          <p>Twitter</p>
          <i>{FaTwitter}</i>
        </div>
      </section>
    </div>
  );
};

export default App;
