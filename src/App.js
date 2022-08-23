import './App.css';
import React from 'react';
import NavBar from './components/navBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartProvider from './Context/CartContext';
import Contact from './components/Contact'
import Home from './components/Home';
import Form from './components/form';
import Boutique from './components/Boutique';



function App() {
  return (
    <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes className='ItemDetail'>
            <Route path='/' element={<Home />}/>
            <Route path='/Store' element={<ItemListContainer />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/detail/:detailId' element={<ItemDetailContainer />}/>
            <Route path='/Contact' element={<Contact />}/>
            <Route path='./Form' element={<Form/>}/>
            <Route path='./Boutique' element={<Boutique/>}/>
          </Routes>  
        </CartProvider>
    </BrowserRouter>
  );
}

export default App;
