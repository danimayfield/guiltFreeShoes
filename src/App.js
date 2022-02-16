import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import img1 from "./assets/1.jpg"


const App = () => {

  // init Swiper:
  const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    
  });

  return (
    <div>
      <section>
      <h1>Welcome to Guilt Free Shopping</h1>
      <img src={img1} alt="Colorful Nike Air running shoes" />
      <button>Start Shopping</button>
      </section>
      <section>
        <form action="">
          <label htmlFor="email" className='visuallyHidden'>Email Address:</label>
          <input type="email" name="email" id="email" placeholder='Email' />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" placeholder='Password' />
          <input type="submit" value="SIGN IN" className='button'/>
        </form>
      </section>
    </div>
  );
}

export default App;
