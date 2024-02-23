import media from "../utils/media";
const Items = () => {
  return (
    <>
      <section
        id="menu"
        className="w-full h-fit bg-slate-950  py-20 lg:py-24 flex flex-col justify-center items-center gap-10"
      >
        <h1
          data-aos="zoom-in"
          className="text-white text-5xl lg:text-6xl font-bold text-center"
        >
          View our tasty <span className="text-green-500 italic">Food</span>
        </h1>
        <p
          data-aos="slide-up"
          className="text-white font-semibold text-xl text-center"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, eius.
        </p>
        <div
          id="grids"
          className="flex flex-col lg:flex-row justify-center items-center flex-wrap gap-10 "
        >
          {media.dish.map((item) => (
            <div
              data-aos="slide-up"
              data-aos-delay="200"
              className="flex flex-col justify-center items-center gap-4 bg-slate-900 pb-10 lg:w-2/5 w-full rounded-md"
              key={item.id}
            >
              <img src={item.src} alt={item.name} />
              <div className="text-white font-bold text-2xl uppercase ">
                {item.name}
              </div>
              <p className="text-white font-semibold text-lg text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
                voluptate.
              </p>
              <button className="bg-green-500 px-8 py-4 rounded-full font-semibold hover:bg-orange-500 hover:text-black mt-2 ">
                Order Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Items;
