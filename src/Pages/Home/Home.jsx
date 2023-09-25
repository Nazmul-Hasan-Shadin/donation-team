
import { useEffect, useState } from 'react';
import Banner from '../../Components/Banner/Banner';
import Cards from '../../Components/Cards/Cards';

import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Home = () => {
    const [displayData,setDisplayData]=  useState([]);
    const [filterDonate,setFilterDonate]=useState([]);
    
    const cards= useLoaderData();
     useEffect(()=>{
         setDisplayData(cards)
       
     },[cards])
    const formCardFilter = (search)=> {
        
        if (search == 'Health' ) {
            const findDonate= displayData.filter((fileteredData)=> fileteredData.category ==  search );
            console.log(findDonate);
            setFilterDonate(findDonate)
        }
        else if (search === 'Education'){
            const findDonate= displayData.filter((fileteredData)=> fileteredData.category ==  search );
            console.log(findDonate);
            setFilterDonate(findDonate)
        }
        else if (search == 'Clothing'){
            const findDonate= displayData.filter((fileteredData)=> fileteredData.category ==  search );
            console.log(findDonate);
            setFilterDonate(findDonate)
        }
        else if (search == 'Food'){
            const findDonate= displayData.filter((fileteredData)=> fileteredData.category ==  search );
            console.log(findDonate);
            setFilterDonate(findDonate)

        }
        else{
             
            Swal.fire({
                icon: 'error',
                title: 'Oops...! ',
                text: 'No Data Found ',
               
              })

          setFilterDonate(displayData);

        }

    }
 
    return (
        <div>
             
            <Banner setDisplayData= {setDisplayData} formCardFilter={formCardFilter}> </Banner>
            <Cards
              setDisplayData= {setDisplayData}
              filterDonate={filterDonate} 
             cards={cards}> </Cards>

         
      
        </div>
    );
};

export default Home;