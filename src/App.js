import Nav from "./components/Nav";
import Carousel from "./components/Carousel";

const App = () => {
  return (
    <div className="wrapper">
      <Nav />
      <main>
        <h1>Welcome to</h1>
        <h1>Guilt-Free Shopping</h1>
        <Carousel />
        <div className="buttonContainer">
          <button>START SHOPPING</button>
        </div>
      </main>
    </div>
  );
};

export default App;
