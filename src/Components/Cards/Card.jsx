import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({card,filterDonate}) => {
  const {picture,title,category,category_bg,card_bg,text_button_bg,description,price,id} = card  ;



    return (
      <Link to={`/cardDetails/${id}`}>
          <div  className="card  h-full  shadow-xl" style={{backgroundColor: card_bg }}>
        <figure className="">
          <img src={picture  } alt="Shoes" className="rounded-xl w-full h-56" />
        </figure>
        <div className=" items-center text-start">

         <div >
         <div className="card-actions pl-6 ">
            <button style={{backgroundColor:category_bg , color:text_button_bg}} className="btn-sm btn  my-5">{category} </button>
          
          </div>
          <h2 style={{color: `${text_button_bg}`}} className="card-title font-semibold pl-5 pb-7 relative bottom-0">{title}</h2>
         </div>
        
         

        </div>
      </div>
      
      </Link>
    );
};

export default Card;