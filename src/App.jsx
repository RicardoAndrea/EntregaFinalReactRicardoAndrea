import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx'
import NavBar from './Components/NavBar/NavBar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './Components/Error.jsx'
import CartWidget from './Components/CartWidget/CartWidget.jsx'
function App() {
  return (
    
      <div className='App colorFondo'>
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path={'/'} element={ <IntemListContainer/> }/>
          <Route path={'/category/:id'} element={ <IntemListContainer/> }/>
          <Route path={'/item/:id'} element= { <IntemDetailContainer/> }/>
          <Route path={'/cart'} element= { <CartWidget/> }/>
          <Route path={'*'} element= { <Error/> }/> 
        </Routes>
        </BrowserRouter>
      </div>    
   
  );
}

export default App
