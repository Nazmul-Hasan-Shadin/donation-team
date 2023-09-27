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
                <div className="card w-full max-h-[100vh] md:max-h-[35vh] bg-base-100 ">
        <div className='object-cover  '>
            
            <img className=' w-full md:h-[450px] object-cover ' src={picture} alt="Shoes" />
             
           
            </div>
            <button   style={{backgroundColor:text_button_bg, zIndex:7 }} onClick={()=>handleDonate(id)}  className='btn lg:relative md:bottom-14 btn-sm md:btn-md w-36  z-10   -translate-y-[40px] md:translate-y-0 text-white  md:bottom-43  ml-5 bg-[#FF444A] '>Donate $ {price } </button>
            
            <div style={{zIndex: 0}} className='bg-black  md:h-[140px] opacity-20 p-5 md:py-8 relative bottom-20 md:bottom-28 '>
          
         
                  </div>
            




        <div className=" card-body  bottom-25 -translate-y-20">
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