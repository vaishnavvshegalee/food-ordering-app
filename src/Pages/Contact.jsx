import phone from "../assets/icons/phone.svg";
import mail from "../assets/icons/mail.svg";
import map from "../assets/icons/map.svg";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className=" bg-slate-950 w-full h-fit px-20 py-20 flex  flex-col lg:flex-row justify-around items-center gap-16"
      >
        <div
          data-aos="zoom-up"
          data-aos-delay="500"
          className="flex flex-col  justify-center items-center gap-4"
        >
          <div
            id="icon-box"
            className="bg-green-500 p-4 rounded-full hover:bg-orange-500 cursor-pointer "
          >
            <img src={phone} alt="phone-icon" width={30} height={30} />
          </div>
          <h1 className="text-white font-bold text-2xl uppercase">Call us</h1>
          <p className="text-white font-normal text-lg lg:text-xl text-center">
            Mon-Fri from 9 am to 5 pm
          </p>
          <p className="text-orange-500 text-lg lg:text-2xl font-bold underline cursor-pointer">
            +91 781 686 7818
          </p>
        </div>
        <div
          data-aos="zoom-up"
          data-aos-delay="600"
          className="flex flex-col  justify-center items-center gap-4"
        >
          <div
            id="icon-box"
            className="bg-green-500 p-4 rounded-full hover:bg-orange-500 cursor-pointer "
          >
            <img src={map} alt="phone-icon" width={30} height={30} />
          </div>
          <h1 className="text-white font-bold text-2xl uppercase">Reach us</h1>
          <p className="text-white font-normal text-lg lg:text-xl text-center">
            Mon-Fri from 9 am to 5 pm
          </p>
          <p className="text-orange-500 text-lg lg:text-2xl font-bold underline cursor-pointer">
            +91 781 686 7818
          </p>
        </div>
        <div
          data-aos="zoom-up"
          data-aos-delay="700"
          className="flex flex-col  justify-center items-center gap-4"
        >
          <div
            id="icon-box"
            className="bg-green-500 p-4 rounded-full hover:bg-orange-500 cursor-pointer "
          >
            <img src={mail} alt="phone-icon" width={30} height={30} />
          </div>
          <h1 className="text-white font-bold text-2xl uppercase">Mail us</h1>

          <p className="text-orange-500 text-base lg:text-xl font-bold underline cursor-pointer">
            @vaishnavshegale333@gmail.com
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
