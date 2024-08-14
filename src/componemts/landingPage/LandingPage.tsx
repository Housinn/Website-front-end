import React from "react";
import Img2 from "../../assets/images/img2.jpeg";
import logo from "../../assets/icons/Logo.svg";
import property from "../../assets/images/property.png";
import mapPin from "../../assets/images/map-pin.jpg";
import bedIcon from "../../assets/images/bed.png";
import bathIcon from "../../assets/images/bath-shower-line.png";
import areaIcon from "../../assets/images/area.png";
import company from "../../assets/images/company.png";
import shareBtn from "../../assets/images/share.png";
import addIcon from "../../assets/images/ion_add.png";

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <div className="relative bg-cover z-0 ">
        <img src={Img2} className="fill" />
        <div className="flex justify-between absolute z-10 top-0">
          <div className="flex">
            <a>Buy</a>
            <a>Rent</a>
            <a>Sell</a>
            <a>Short Let</a>
          </div>
          <div>
            <img src={logo} />
          </div>
          <div className="flex">
            <button className="bg-blue">Sign In</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-32 py-8">
        <div className="flex justify-between">
          <div className="basis-1/2">
            <span className="font-semibold">New Listings</span>
          </div>
          <div className="bg-gray-200 p-0.5 border-1 border-grey rounded-md">
            <button className="px-2 bg-blue-200 rounded-md">For Sale</button>
            <button className="px-2 bg-blue-200 rounded-md">For Rent</button>
            <button className="px-2 bg-blue-200 rounded-md">Short-let</button>
            <button className="px-2 bg-blue-200 rounded-md">Lands</button>
          </div>
        </div>
        <div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg mt-4">
            <img className="w-full" src={property} alt="Property" />
            <div className="px-6 py-4">
              <div className="flex justify-between items-center">
                <span className="font-bold text-xl text-gray-900">
                  ₦{(12345678).toLocaleString()}
                </span>
              </div>
              <div className="mt-2">
                <p className="text-gray-700 text-base">
                  {"Brand new Luxury 4 Bedroom duplex"}
                </p>
              </div>
              <div className="flex mt-2">
                <img src={mapPin} alt="Map-pin" className="w-4 h-4" />
                <p className="text-gray-500 text-sm">
                  {"Abuja, Abuja FCT, Katampe Extension, KATAMPE EXTENSION"}
                </p>
              </div>
              <div className="flex mt-2">
                <div className="flex mr-2">
                  <img src={bedIcon} alt="Bed icon" className="w-4 h-4" />
                  <span className="text-sm font-semibold text-gray-700 ml-1">
                    7 Beds
                  </span>
                </div>
                <div className="flex mr-2">
                  <img src={bathIcon} alt="Bath icon" className="w-4 h-4" />
                  <span className="text-sm font-semibold text-gray-700 ml-1">
                    8 Baths
                  </span>
                </div>
                <div className="flex mr-2">
                  <img src={areaIcon} alt="Area icon" className="w-4 h-4" />
                  <span className="text-sm font-semibold text-gray-700 ml-1">
                    5678 ft²
                  </span>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex items-center">
                  <div className="rounded-full w-10 h-10 p-1 border-2 border-grey">
                    <img src={company} alt="campany" />
                  </div>

                  <span>Sanrealtor</span>
                </div>
                <div>
                  <button className="bg-gray-400 rounded-full w-8 h-8 p-1">
                    <img src={addIcon} />
                  </button>
                  <button className="bg-gray-400 rounded-full w-8 h-8 p-1">
                    <img src={shareBtn} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
