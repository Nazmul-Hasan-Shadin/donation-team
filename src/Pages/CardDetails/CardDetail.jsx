import React from 'react';
import Swal from 'sweetalert2';
import { saveToLc } from '../../utilities/localStorage';

const CardDetail = ({donateCard}) => {
    const {picture,title,category,category_bg,card_bg,text_button_bg,description,price,id} = donateCard  || {} ;
    const handleDonate= (id)=>{

      saveToLc(id);


        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Successfully Donated  ',
            showConfirmButton: false,
            timer: 1000
          })
    }
    return (
     <div className='py-20'>
                <div className="card w-full max-h-[85vh] bg-base-100 shadow-xl">
        <figure>
            
            <img className='w-full ' src={picture} alt="Shoes" />
            
           
            </figure>
            <div className='bg-black hero-overlay h-[120px] opacity-20 p-4 relative bottom-20 '>
                
         
                  </div>
                  <button  style={{backgroundColor:text_button_bg }} onClick={()=>handleDonate(id)}  className='btn w-36 text-white relative bottom-40 md:bottom-[136px] ml-5 bg-[#FF444A] '>Donate $ {price } </button>




        <div className=" card-body relative bottom-28">
          <h2 className="card-title text-2xl mb-2">
           {title}
          
          </h2>
          <p> {description} </p>
        
        </div>
      </div>
     </div>
    );
};

export default CardDetail;