import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import './scss/app.scss';
import Pizza from './pages/Pizza';



function App() {
  //const pathname = window.location.pathname;
  
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        {/* {pathname === '/' && <Home />} */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
