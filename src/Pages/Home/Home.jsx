
import Banner from '../../Components/Banner/Banner';
import Cards from '../../Components/Cards/Cards';

import { useLoaderData } from 'react-router-dom';

const Home = () => {
   
    const cards= useLoaderData();
 
    return (
        <div>
        
            <Banner></Banner>
            <Cards cards={cards}></Cards>

         
      
        </div>
    );
};

export default Home;