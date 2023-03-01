import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar';

import Home from './components/routes/home';
import ItemContainer from './components/routes/itemContainer/itemContainer';

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
