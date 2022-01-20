import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Mobile } from '../Mobile';
import NavigationBar from '../Navigation/NavigationBar';
import Product from '../Products/Product';
import ProductDetails from '../Products/ProductDetails';

const Landing = () => {
    return (
        <div>
            <BrowserRouter>
            <NavigationBar/>
            <Routes>
       <Route path="/" element={ <Product/>}/>
          <Route path="/details" element={  <ProductDetails/>}/>
          <Route path="/mobile" element={<Mobile/>}/>
            </Routes>
             </BrowserRouter>  
        </div>
    );
};

export default Landing;