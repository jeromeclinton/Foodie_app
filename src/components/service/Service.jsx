//import React from "react";
import food1 from "../../assets/biryani2.png";

const Service = () => {
  const serviceData = [
    {
      id: 1,
      img: food1,
      title: "Biryani",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis magni illo porro accusantium earum cum pariatur fugiat officia consequuntur nemo!",
    },
    {
      id: 2,
      img: food1,
      title: "Chiken Kari",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis magni illo porro accusantium earum cum pariatur fugiat officia consequuntur nemo!",
    },
    {
      id: 3,
      img: food1,
      title: "Cold Coffee",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis magni illo porro accusantium earum cum pariatur fugiat officia consequuntur nemo!",
    },
  ];
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/*Header section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Our Services
            </p>
            <h1 className="text-3xl font-bold">Services</h1>
            <p className="text-gray-400 text-xs">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis magni illo porro accusantium earum cum pariatur
              fugiat officia consequuntur nemo!
            </p>
          </div>
          {/* card section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 sm:grid-cols-2 md:gap-5 place-items-center">
            {serviceData.map(({ id, img, title, desc }) => {
              return (
                <div
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  key={id}
                  className="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary hover:text-white duration-300 p-4 shadow-xl"
                >
                  <div className="h-[100px]">
                    <img
                      src={img}
                      alt=""
                      className="max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300"
                    />
                  </div>
                  <div className="text-center p-4">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <p className="text-gray-400 text-sm line-clamp-2 group-hover:text-white duration-300">
                      {desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
