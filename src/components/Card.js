import React, { useState } from 'react';

const Card = ({ card }) => {
    const [flip, setflip] = useState(false); // okretanje kartice
    return (

        < div
            className={`card ${flip ? 'flip' : ''}`}

            onClick={() => setflip(!flip)} >
            <div className='front'>
                {card.question}
                <div className='card-options'>
                    {card.options.map(option => {
                        return <div className='card-option'>{option} </div>;
                    })}
                </div>


            </div>

            <div className="back"> {card.answer}</div>
            {flip ? card.answer : card.question}

        </div >

    );
};

export default Card;