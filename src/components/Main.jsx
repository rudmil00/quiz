import '../App.css';
import React, { useEffect, useRef } from 'react';
import Cardlist from './Cardlist';
import axios from 'axios';
import he from 'he';
import HeroSection from './HeroSection';


const Main = ({ categories, setCategories, cardlist, setCardlist }) => {

    const categoryElement = useRef();
    const amountEl = useRef();



    useEffect(() => {
        axios
            .get('https://opentdb.com/api_category.php')
            .then(res => {
                setCategories(res.data.trivia_categories);
            });
    }, [setCategories]);





    function handleSubmit(e) {


        e.preventDefault();

        axios
            .get('https://opentdb.com/api.php?', {
                params: {

                    amount: amountEl.current.value,
                    category: categoryElement.current.value
                }
            })
            .then(res => {

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
    }







    return (
        <>
            <HeroSection />
            <form className='forma' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="category" >Category</label>
                    <select id="category" ref={categoryElement}>
                        {categories.map(category => {
                            return <option value={category.id} key={category.id}>{category.name}</option>;
                        })}
                    </select>

                </div>

                <div className="form-group">
                    <label htmlFor="amount">Number of Questions</label>
                    <input type="number" id="amount" min="1" step="1" defaultValue={10} ref={amountEl} />
                </div>
                <div className="form-group">
                    <button className="btn">Generate</button>
                </div>
            </form>
            <Cardlist cardlist={cardlist} />
        </>
    );
};

export default Main;