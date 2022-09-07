import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import './scss/app.scss';
import Pizza from './pages/FullPizza';
import MainLayout from './layouts/MainLayout';



function App() {
  //const pathname = window.location.pathname;
  
  return (
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
  );
}

export default App;
