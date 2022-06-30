import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

import './scss/app.scss';
export const SearchContext = React.createContext();

function App() {
  const pathname = window.location.pathname;

  const [searchValue, setSearchValue] = React.useState('');
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          {/* {pathname === '/' && <Home />} */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
