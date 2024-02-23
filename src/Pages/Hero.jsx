import { useEffect } from "react";
import bgImg from "../assets/herobanner.jpg";
import Aos from "aos";
const Hero = () => {
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
      <section
        id="home"
        className="w-full bg-black flex justify-between items-center text-white px-10 py-20 bg-cover bg-center "
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="flex flex-col justify-center items-center lg:items-start gap-8 w-full lg:w-2/3 pl-10 pr-2 lg:pl-32 lg:pr-10">
          <div
            data-aos="slide-right"
            id="box-circle"
            className="bg-green-500 p-12 rounded-full flex justify-center items-center flex-col gap-4 w-60 mt-6"
          >
            <h1 className="text-black font-bold text-6xl">40%</h1>
            <h1 className="text-black font-bold text-xl text-center uppercase">
              business lunch
            </h1>
          </div>
          <h1
            data-aos="zoom-in-out"
            className="text-2xl font-semibold uppercase "
          >
            new restaurant
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-4xl lg:text-5xl font-bold text-center lg:text-start"
          >
            Where every ingredients <br /> tells a story
          </h1>
          <button
            data-aos="zoom-in-up"
            className="bg-orange-500  py-4 px-8 rounded-full hover:bg-green-500 text-black font-bold"
          >
            Read More
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
