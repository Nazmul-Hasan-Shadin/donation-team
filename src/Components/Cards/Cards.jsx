import React, { useState } from 'react';
import Card from './Card';

const Cards = ({cards}) => {
    

    return (
        <div>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>

            {
                cards.map(card=>  <Card 
                    card={card}
                    key={card.id}></Card>  )
             }
            </div>
        </div>
    );
};

export default Cards;