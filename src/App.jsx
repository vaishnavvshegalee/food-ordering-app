import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Hero from "./Pages/Hero";
import Menu from "./Pages/Menu";
import Items from "./Pages/Items";
import Banners from "./Pages/Banners";
import Contact from "./Pages/Contact";
import { useEffect } from "react";
import Aos from "aos";
function App() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 700,
      easing: "ease-in-sine",
      delay: 200,
    });
  }, []);
  return (
    <>
      <h1 className="">
        <Header />
        <Hero />
        <Menu />
        <Items />
        <Banners />
        <Contact />
        <Footer />
      </h1>
    </>
  );
}

export default App;
