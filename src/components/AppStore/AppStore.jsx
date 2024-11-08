//import React from 'react'
import appStoreImg from "../../assets/app_store.png";
import playStoreImg from "../../assets/play_store.png";
import gif from "../../assets/mobile_bike.gif";

const AppStore = () => {
  return (
    <>
      <div className="py-10 bg-gray-100 dark:bg-gray-800">
        <div className="container">
          <div
            data-aos="fade-up"
            data-aos-duration="300"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center"
          >
            <div className="space-y-6 max-w-xl mx-auto">
              <h1 className="text-3xl font-semibold text-center sm:text-left sm:text-4xl dark:text-gray-400 text-gray-700">
                Foodly is available for android and iOS
              </h1>
              <div>
                <a href="#">
                  <img
                    src={playStoreImg}
                    alt="play store"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
                <a href="#">
                  <img
                    src={appStoreImg}
                    alt="play store"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
              </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="300">
              <img src={gif} alt="bike gif" className="max-w-[300px] mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
