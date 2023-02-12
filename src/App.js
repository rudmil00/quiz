
import './App.css';
import React, { useState, useEffect } from 'react';
import Cardlist from './components/Cardlist';
import axios from 'axios';
import he from 'he';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About.jsx';

function App() {

  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=50&category=21')
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


  ];
  const [cardlist, setCardlist] = useState(SAMPLE_CARDS);
  return (
    <BrowserRouter>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route
            path="/"
            element={<Cardlist cardlist={cardlist} />}

          />
          <Route
            path="/about"
            element={<About />}

          />
        </Routes>
      </div>
    </BrowserRouter>
  );


}

export default App;
