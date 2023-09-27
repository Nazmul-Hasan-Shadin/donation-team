import React, { useEffect, useState } from 'react';
import { getStoredCard } from '../../utilities/localStorage';
import { useLoaderData } from 'react-router-dom';
import DonateCard from '../../Components/Donate/DonateCard';

const Donation = () => {
    const [donate,setDonate]= useState([]);
    const [displayDonate, setDisplayDonate]= useState([]);
    const [showall ,setShowAll]= useState(false);
    console.log(displayDonate);

    const  data = useLoaderData();
 

    
    useEffect(()=>{
      // this is local storage data
        const storedDonationId= getStoredCard();
      
         if (data.length) {


          const totalDonateCard= [];
     
          for (const donateId of storedDonationId ) {
                const findId=  data.find(data=> data.id === donateId);
           
                
                if (findId) {
                  totalDonateCard.push(findId);
                }
          }
          setDonate(totalDonateCard);
          setDisplayDonate(totalDonateCard)
    

          
         }

         else{
 
         }


    },[data])

    const handleAllCardShow =()=> {
     setShowAll(true)
    

    }



    
    return (
      <div className='my-24'>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {
            
  showall  ?  (displayDonate.map(donate=>  <DonateCard donate={donate} key={donate.id} ></DonateCard> )):(displayDonate.slice(0,4).map(donate=>  <DonateCard donate={donate} key={donate.id} ></DonateCard> )) 
           
            }
        </div>
       <div className='flex py-4'>
     { 

  donate.length >4 && !showall  &&  ( <button onClick={handleAllCardShow}  className='btn text-white mx-auto px-5  bg-[#009444]'> See All</button> )

     
     }
       </div>
      </div>
    );
};

export default Donation;