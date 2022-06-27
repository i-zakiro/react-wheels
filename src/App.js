import React from 'react';
import Header from './components/Header';

import './scss/app.scss';
/////////////////////////////////////////////////////////////////////////////////////////////////////
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';

function App() {
  const pathname = window.location.pathname;

  const [searchValue, setSearchValue] = React.useState('');
  console.log(searchValue);
  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        {/* {pathname === '/' && <Home />} */}
        <Routes>
          <Route path="/" element={<Home searchValue={searchValue} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
