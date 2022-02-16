import Nav from "./components/Nav";
import Carousel from "./components/Carousel";

const App = () => {

  return (
    <div>
      <Nav/>
      <section>
        <h1>Welcome to Guilt Free Shopping</h1>
        <Carousel />
        <button>Start Shopping</button>
      </section>
    </div>
  );
};

export default App;
