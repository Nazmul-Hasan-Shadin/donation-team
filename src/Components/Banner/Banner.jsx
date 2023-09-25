import React from 'react';
 import BannerImg from '../../assets/banner.png'
const Banner = () => {
    return (
        <div>
          <header>
           


            <div className="hero min-h-[75vh]" >
  <div className="hero-overlay opacity-10 "  style= {{backgroundImage: `url(${BannerImg})`}}> </div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md w-full">
    <h2 className='font-bold text-3xl text-black mb-9'>I Grow By Helping People In Need</h2>
            <input  type="text" placeholder="Search here" className="input px-16 input-bordered  inline  max-w-xs " />
            <button className="btn  text-white input-bordered border-l-0 rounded-l-none relative -left-2   btn-active bg-[#FF444A]">Search</button>
    </div>
  </div>
</div>


            
          </header>
        </div>
    );
};

export default Banner;