import "./App.css";
import Scroll from "./components/Scroll";
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar";
import About from "./components/about/About";
import Developer from "./components/developer/Developer";
import Subscribe from "./components/subscribe/Subscribe";
import Footer from "./components/footer/Footer";
import CookieConsent from "react-cookie-consent";

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
      <CookieConsent
        debug={true}
        location="bottom"
        style={{
          background: "#333",
          textAlign: "left",
          paddingBottom: "1rem",
          fontSize: "16px",
          fontFamily: "Gideon Roman",
        }}
        buttonStyle={{
          color: "#333",
          background: "#fff",
          fontSize: "18px",
          fontFamily: "Gideon Roman",
          marginRight: "1rem",
        }}
        buttonText="OK, rozumiem"
        expires={365}
      >
        "W ramach naszej witryny stosujemy pliki cookies w celu świadczenia
        Państwu usług na najwyższym poziomie, w tym w sposób dostosowany do
        indywidualnych potrzeb. Korzystanie z witryny bez zmiany ustawień
        dotyczących cookies oznacza, że będą one zamieszczane w Państwa
        urządzeniu końcowym. Możecie Państwo dokonać w każdym czasie zmiany
        ustawień dotyczących cookies."
      </CookieConsent>
    </div>
  );
}

export default App;
