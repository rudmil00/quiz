import React, { useState } from 'react';

const Card = ({ card }) => {
    const [flip, setflip] = useState(false); // okretanje kartice
    return (
        <div onClick={() => setflip(!flip)} >
            {flip ? card.answer : card.question}

        </div>
    );
};

export default Card;