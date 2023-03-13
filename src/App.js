import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar/navbar';

import Home from './components/routes/home';
import ItemContainer from './components/routes/itemContainer/itemContainer';

// import CheckOut from './components/routes/CheckOut/CheckOut';
import Category from './components/routes/category';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route
            exact
            path="/item/:id"
            element={<ItemContainer></ItemContainer>}
          ></Route>
          <Route
            exact
            path="/:categ/:type"
            element={<Category></Category>}
          ></Route>
          <Route exact path="/:categ" element={<Category></Category>}></Route>
          {/* <Route exact path="/checkout" element={<CheckOut></CheckOut>}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
