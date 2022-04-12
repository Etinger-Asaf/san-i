import Navbar from "./components/Navbar";
import About from "./components/About";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import SlidingShow from "./components/SlidingShow";
import "./styles.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <SlidingShow />
      <About />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
