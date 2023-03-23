import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar/navbar';

// import { CartContext } from './contexts/CartContext';
import { CartProvider } from './contexts/CartContext';

import Home from './components/routes/home';
import ItemContainer from './components/routes/itemContainer/itemContainer';

// import CheckOut from './components/routes/CheckOut/CheckOut';
import ListItemByCategory from './components/routes/ListItemByCategory';

function App() {
  return (
    <>
      <CartProvider>
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
              element={<ListItemByCategory></ListItemByCategory>}
            ></Route>
            <Route
              exact
              path="/:categ"
              element={<ListItemByCategory></ListItemByCategory>}
            ></Route>

            {/* <Route
              exact
              path="/checkout"
              element={<CheckOut></CheckOut>}
            ></Route> */}
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
