import React from 'react';
import { Link } from 'react-router-dom';

const DonateCard = ({donate}) => {
    const {picture,title,category,category_bg,card_bg,text_button_bg,description,price,id} = donate;
    return (
        <div  className="card  flex  md:flex-row h-[230px] shadow-xl" style={{backgroundColor: card_bg }}>
        <figure className="  lg:w-2/3 w-full">
        <figure className="w-full">
          <img src={picture  } alt="Shoes" className="rounded-xl w-full h-56 " />
        </figure>
        </figure>
        <div className=" items-center ">

         <div className='' >
         <div className="card-actions pl-6 ">
            <button style={{backgroundColor:category_bg , color:text_button_bg}} className="btn-sm btn  my-2">{category} </button>
          
          </div>
               <div className='pl-6'>
               <h2 style={{color: `${text_button_bg}`}} className="card-title font-semibold  pb-7 relative bottom-0">{title}</h2>
          <p  style={{ color: text_button_bg }}  > ${price}</p>
    

     <Link to={`/cardDetails/${id}`}>
     <button style={{backgroundColor: text_button_bg , color:'white'}} className="btn-md btn  w-full md:w-32  my-5">See details </button>
     </Link>
               </div>
         </div>
        
         

        </div>

       
      </div>
    );
};

export default DonateCard;