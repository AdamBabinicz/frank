import "./App.css";
import Scroll from "./components/Scroll";
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar";
import About from "./components/about/About";
import Developer from "./components/developer/Developer";
import Subscribe from "./components/subscribe/Subscribe";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Scroll />
      <Navbar />
      <Hero />
      <About />
      <Developer />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
