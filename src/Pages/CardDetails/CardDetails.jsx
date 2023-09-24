import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CardDetail from './CardDetail';

const CardDetails = () => {
    const [donateCard,setDonateCard]=useState([]);
    const {id}= useParams();
    const intId= parseInt(id);
    const singleDonateCardDetails= useLoaderData();
    console.log(singleDonateCardDetails,id);
    
    useEffect(()=>{
        if (singleDonateCardDetails) {
          const findDonateCard=  singleDonateCardDetails.find(donate=> donate.id === intId);
          setDonateCard(findDonateCard);
        }
    },[singleDonateCardDetails,id])

    return (
        <div>
             <CardDetail donateCard={donateCard}></CardDetail>
        </div>
    );
};

export default CardDetails;