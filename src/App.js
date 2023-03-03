import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar/navbar';

import Home from './components/routes/home';
import ItemContainer from './components/routes/itemContainer/itemContainer';
import Clothes from './components/routes/Clothes';
import Electronics from './components/routes/Electronics';
import Jewlery from './components/routes/Jewlery';
import CheckOut from './components/routes/CheckOut/CheckOut';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          {/* <Route exact path="/test" element={<Test></Test>}></Route> */}
          <Route
            exact
            path="/item/:id"
            element={<ItemContainer></ItemContainer>}
          ></Route>
          <Route
            exact
            path="/clothes/:type"
            element={<Clothes></Clothes>}
          ></Route>
          <Route
            exact
            path="/electronics"
            element={<Electronics></Electronics>}
          ></Route>
          {/* <Route exact path="/checkout" element={<CheckOut></CheckOut>}></Route> */}
          <Route exact path="/jewlery" element={<Jewlery></Jewlery>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
