import React from "react";
import banner1 from "../assets/banner1.jpg";
const Banners = () => {
  return (
    <>
      <section
        className="w-full h-fit bg-black flex justify-between items-center text-white px-10 lg:px-40 py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${banner1} ` }}
      >
        <div className="flex flex-col justify-center items-start gap-10">
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="bg-amber-500 p-16 rounded-full flex justify-center items-center flex-col gap-4 w-60 mt-6"
          >
            <h1 className="text-black font-bold text-5xl">33%</h1>
            <h1 className="text-black font-bold text-xl text-center uppercase">
              Mocktail's
            </h1>
          </div>
          <h1
            data-aos="slide-up"
            data-aos-delay="300"
            className="lg:text-6xl text-5xl font-semibold"
          >
            Keep up to date with us
          </h1>
          <p
            data-aos="slide-up"
            data-aos-delay="300"
            className="text-xl lg:text-2xl font-semibold"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            earum!
          </p>
          <div
            data-aos="slide-right"
            data-aos-delay="300"
            className="flex flex-col lg:flex-row justify-start items-center w-full gap-6 mt-3 lg"
          >
            <input
              type="email"
              name=""
              id=""
              className="text-black p-4 font-normal w-full lg:w-[50%] rounded-full outline-none"
              placeholder="Enter Email"
            />
            <button className="bg-green-500 hover:bg-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg uppercase">
              Send
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banners;
