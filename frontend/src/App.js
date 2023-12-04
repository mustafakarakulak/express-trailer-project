import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from '../src/pages/products/Products';
import Orders from '../src/pages/orders/orders';
import Users from '../src/pages/users/users';
import Categories from '../src/pages/categories/categories';

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/users" element={<Users/>}/>
        <Route path="/categories" element={<Categories/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;