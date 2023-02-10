
import './App.css';
import React, { useState } from 'react';
import Cardlist from './components/Cardlist';



function App() {
  const SAMPLE_CARDS = [
    {
      id: 1,
      question: 'Tekst pitanja 1',
      answer: 'odgovor1',
      options: [
        'a',
        'b',
        'c',
        'd'
      ]
    },

    {
      id: 2,
      question: 'Tekst pitanja 2',
      answer: 'odgovor2',
      options: [
        'a',
        'b',
        'c',
        'd'
      ]
    }


  ];
  const [cardlist, setCardlist] = useState(SAMPLE_CARDS);
  return (
    <>

      <Cardlist cardlist={cardlist} />
    </>
  );


}

export default App;
