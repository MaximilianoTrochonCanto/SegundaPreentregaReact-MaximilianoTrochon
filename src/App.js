import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavbarBootstrap } from './componentes/nav/navbar/navbar';
import { useState } from 'react';
import { productos } from './productos/productos';
import { Accesorios } from './paginas/Accesorios';
import { Calzado } from './paginas/Calzado';
import { Remeras } from './paginas/Remeras';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import ItemDetail from './componentes/itemDetail/itemDetail';


function App() {
  return(
    <Router>
      <header>
        <NavbarBootstrap/>
      </header>
      <Routes>
        <Route path="/" element={<Remeras/>} />            
        <Route path='/calzado' element={<Calzado/>}/>            
        <Route path='/accesorios' element={<Accesorios />}/>          
        <Route path="/:productId" element={<ItemDetail/>} />            
        <Route path='/calzado/:productId' element={<ItemDetail/>}/>            
        <Route path='/accesorios/:productId' element={<ItemDetail/>}/>  
        


        </Routes>
    </Router>
      
    

    
  )
  
}

export default App;
