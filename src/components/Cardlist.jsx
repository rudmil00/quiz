import React from 'react';
import Card from './Card';

import HeroSection from './HeroSection';
const Cardlist = ({ cardlist }) => {
    return (
        <>
           <HeroSection />
        <div className='card-grid'>
            {cardlist.map(card => {
                return <Card card={card} key={card.id} />; //key koristimo da ne  bi renderovao ono sto vec jeste
            })}
            </div>

            </>
    );
};

export default Cardlist;