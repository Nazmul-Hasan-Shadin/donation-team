import React, { useEffect, useState } from 'react';
import { getStoredCard } from '../../utilities/localStorage';
import { useLoaderData } from 'react-router-dom';
import DonateCard from '../../Components/Donate/DonateCard';

const Donation = () => {
    const [donate,setDonate]= useState([])


    const  data = useLoaderData();


    
    useEffect(()=>{
        const storedDonationId= getStoredCard();
      
         if (data.length) {
            const mathcedDonation= data.filter(donateId=> storedDonationId.includes(donateId.id))
           setDonate(mathcedDonation);
          
         }


    },[data])



    
    return (
      <div className='my-24'>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            {
                donate.map(donate=>  <DonateCard donate={donate} key={donate.id} ></DonateCard> )
            }
        </div>
       <div className='flex py-4'>
       <button className='btn text-white mx-auto px-5  bg-[#009444]'> See All</button>
       </div>
      </div>
    );
};

export default Donation;