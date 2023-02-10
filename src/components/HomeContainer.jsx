import React from "react";
import Delivery from "../img/delivery.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full flex flex-1 justify-between "
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6 z-10">
        <div className="flex items-center gap-2 justify-center px-4 py-1 rounded-full bg-gradient-to-r from-blue-700 to-fuchsia-500">
          <p className="text-base text-white font-semibold ">
            Homemade Products
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-white">
          Creating Your
          <span className="text-blue-600 text-[3rem] lg:text-[5rem] mx-2">
            New
          </span>
          Experience of Vape
        </p>

        <p className="text-base text-white text-center md:text-left md:w-[80%]">
          More than fifty e-taste and puffs just for you ! 
        </p>

        <button
          type="button"
          className="bg-fuchsia-500 w-full md:w-auto px-4 py-2 text-white rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Shop
        </button>
      </div>
      <div className="py-2 flex-2 hidden items-center relative z-0 md:flex">
        <div className="flex-col flex mx-2">
          <div className="bg-fuchsia-500 w-40 h-64 rounded-full"></div>
          <div className="bg-blue-500 w-40 h-40 my-2 rounded-full"></div>
        </div>
        <div>
          <div className="bg-blue-500 w-40 h-40 my-2 rounded-full"></div>
          <div className="bg-fuchsia-500 w-40 h-64 rounded-full"></div>
          
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
