import React from 'react';

const DonateCard = ({donate}) => {
    const {picture,title,category,category_bg,card_bg,text_button_bg,description,price,id} = donate;
    return (
        <div  className="card  flex  md:flex-row  shadow-xl" style={{backgroundColor: card_bg }}>
        <figure className="w-2/3">
          <img src={picture} alt="Shoes" className="rounded-xl h-full w-full" />
        </figure>
        <div className=" items-center ">

         <div className='' >
         <div className="card-actions pl-6 ">
            <button style={{backgroundColor:category_bg , color:text_button_bg}} className="btn-sm btn  my-5">{category} </button>
          
          </div>
               <div className='pl-6'>
               <h2 style={{color: `${text_button_bg}`}} className="card-title font-semibold  pb-7 relative bottom-0">{title}</h2>
          <p> ${price}</p>
          <button style={{backgroundColor: text_button_bg , color:'white'}} className="btn-sm btn  my-5">See details </button>
               </div>
         </div>
        
         

        </div>

       
      </div>
    );
};

export default DonateCard;