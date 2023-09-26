import React, { useRef, useState } from "react";
import BannerImg from "../../assets/banner.png";
import { useLoaderData } from "react-router-dom";

const Banner = ({ formCardFilter }) => {
  const searchRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const searchValue = searchRef.current.value;
    formCardFilter(searchValue);
  };

  return (
    <div>
      <header className="my-9">
        <div className="hero min-h-[75vh]">
          <div
            className="hero-overlay opacity-10 bg-no-repeat bg-cover mb-18 w-full  "
            style={{ backgroundImage: `url(${BannerImg})` }}
          >
             
          </div>
          <div className="hero-content text-center">
            <div className="max-w-md w-full space-y-2">
              <h2 className="font-bold text-3xl text-black mb-9">
                I Grow By Helping People In Need
              </h2>
        
              <form  onSubmit={handleFormSubmit}>
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="Search here"
                  className="input px-16 input-bordered inline mb-2 max-w-xs "
                />
                <button type="submit"
                  // onClick={() => formCardFilter(searchRef.current.value)}
                  className="btn text-white input-bordered border-l-0 md:rounded-l-none relative -left-2  btn-active bg-[#FF444A]"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Banner;