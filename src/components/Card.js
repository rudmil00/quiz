import React, { useState, useEffect, useRef } from 'react';

const Card = ({ card }) => {
    const [flip, setFlip] = useState(false); // okretanje kartice
    const [height, setHeight] = useState('initial');
    const frontElement = useRef();
    const backElement = useRef();

    function setMaxHeight() {
        const frontHeight = frontElement.current.getBoundingClientRect().height;
        const backHeight = backElement.current.getBoundingClientRect().height;
        setHeight(Math.max(frontHeight, backHeight, 100));
    }

    useEffect(
        setMaxHeight
        , [card.question, card.answer, card.options]);

    return (

        <div
            className={`card ${flip ? 'flip' : ''}`}
            style={{ height: height }}
            onClick={() => setFlip(!flip)}
        >

            <div className='front' ref={frontElement}>
                {card.question}
                <div className='card-options'>
                    {card.options.map(option => {
                        return <div className='card-option'>{option} </div>;
                    })}
                </div>
            </div>

            <div className="back" ref={backElement} > {card.answer}</div>


        </div >

    );
};

export default Card;