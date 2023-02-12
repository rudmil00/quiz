
import './App.css';
import React, { useState } from 'react';

import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About.jsx';
import Footer from './components/Footer';
import Main from './components/Main';


function App() {


  const [categories, setCategories] = useState([]);
  const [cardlist, setCardlist] = useState([]);
  return (
    <BrowserRouter>
      <NavBar />


      <Routes>
        <Route
          exact path="/"
          element={<Main categories={categories} setCategories={setCategories} cardlist={cardlist} setCardlist={setCardlist} />}

        />

        <Route
          exact path="/about"
          element={<About />}

        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );


}

export default App;
