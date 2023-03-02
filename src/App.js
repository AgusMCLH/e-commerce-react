import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar/navbar';

import Home from './components/routes/home';
import ItemContainer from './components/routes/itemContainer/itemContainer';
import Clothes from './components/routes/Clothes';
// import Test from './components/test/Test';

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
