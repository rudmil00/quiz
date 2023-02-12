
import './App.css';
import React, { useState, useEffect } from 'react';
import Cardlist from './components/Cardlist';
import axios from 'axios';
import he from 'he';


function App() {

  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=50')
      .then(res => {
        console.log(res.data);
        setCardlist(res.data.results.map((questionItem, index) => {
          const answer = questionItem.correct_answer;
          const options = [...questionItem.incorrect_answers.map(a => he.decode(a)),
            answer];
          return {
            id: `${index}-${Date.now()}`,
            question: he.decode(questionItem.question),
            answer: he.decode(questionItem.correct_answer),
            options: options.sort(() => Math.random() - .5)
          };
        }));
      });
  }, []);

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
    <div className='container'>

      <Cardlist cardlist={cardlist} />
    </div>
  );


}

export default App;
