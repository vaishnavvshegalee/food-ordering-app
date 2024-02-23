import React from "react";
import vertical1 from "../assets/vertical1.jpg";
import media from "../utils/media";

const Menu = () => {
  return (
    <>
      <section
        id="gallery"
        className="w-full bg-slate-950 h-fit flex flex-col lg:flex-row justify-center items-center gap-16 pt-10"
      >
        {media.menu.map((item) => (
          <div
            data-aos="slide-up"
            data-aos-delay="200"
            className="flex justify-center items-center bg-center bg-cover lg:h-[350px] lg:w-[300px] h-[300px] w-[300px] rounded-xl "
            style={{ backgroundImage: `url(${item.src})` }}
            key={item.id}
          >
            <h1 className="text-white font-bold text-3xl uppercase">
              {item.name}
            </h1>
          </div>
        ))}
      </section>

      <section
        id="about"
        className="bg-slate-950 flex flex-col justify-center items-center lg:flex-row gap-10 lg:py-24 py-20 px-10 lg:px-20 w-full h-fit"
      >
        <div
          id="left"
          className="lg:w-[50%]  flex flex-col justify-end items-center lg:items-start gap-10"
        >
          <h1
            data-aos="zoom-in"
            className="text-white font-bold text-5xl lg:text-6xl"
          >
            About <span className="text-green-500 italic">Us</span>
          </h1>
          {/* <h1 className="text-white text-xl font-semibold uppercase mt-3">
            Grab thi tasty food
          </h1> */}
          <p
            data-aos="zoom-in"
            className="text-white text-lg lg:text-xl font-semibold text-center lg:text-start"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In nemo
            adipisci quod earum quidem id amet impedit iste quos commodi.
          </p>
          <p
            data-aos="zoom-in"
            className="text-white text-lg lg:text-xl font-semibold text-center lg:text-start"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In nemo
            adipisci quod earum quidem id amet impedit iste quos commodi.
          </p>
          <button
            data-aos="zoom-in-up"
            data-aos-delay="200"
            className="bg-orange-500 py-4 px-8 hover:bg-green-500 text-black rounded-sm font-semibold"
          >
            Order Now
          </button>
        </div>
        <div
          id="about-img"
          data-aos="slide-up"
          data-aos-delay="200"
          className="flex items-center justify-center w-full lg:w-[50%]"
        >
          <img
            src={vertical1}
            alt="aboout-img"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>
      </section>
    </>
  );
};

export default Menu;
