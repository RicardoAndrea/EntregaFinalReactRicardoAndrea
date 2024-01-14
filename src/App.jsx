import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx'
import NavBar from './Components/NavBar/NavBar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './Components/Error.jsx'
import CartWidget from './Components/CartWidget/CartWidget.jsx'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.jsx'
import CartProvider from './Components/Context/CartContext.jsx'

function App() {
  return (
    
      <div className='App colorFondo'>
        <BrowserRouter>
        <CartProvider> 
        <NavBar/>
        <Routes>
          <Route path={'/'} element={ <ItemListContainer/> }/>
          <Route path={'/category/:id'} element={ <ItemListContainer/> }/>
          <Route path={'/item/:id'} element= { <ItemDetailContainer/> }/>
          <Route path={'/cart'} element= { <CartWidget/> }/>
          <Route path={'*'} element= { <Error/> }/> 
        </Routes>
        </CartProvider>
        </BrowserRouter>
      </div>    
   
  );
}

export default App
