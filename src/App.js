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
import { ContextProvider } from './context/context';



function App() {
  return(
    <div>
      <ContextProvider>
    <Router>
      <header>
        <NavbarBootstrap/>
      </header>
      <Routes>
        <Route path="/SegundaPreentregaReact-MaximilianoTrochon" element={<Remeras/>} />            
        <Route path='/SegundaPreentregaReact-MaximilianoTrochon/calzado' element={<Calzado/>}/>            
        <Route path='/SegundaPreentregaReact-MaximilianoTrochon/accesorios' element={<Accesorios />}/>          
        <Route path="/SegundaPreentregaReact-MaximilianoTrochon/:productId" element={<ItemDetail/>} />            
        <Route path='/calzado/SegundaPreentregaReact-MaximilianoTrochon/:productId' element={<ItemDetail/>}/>            
        <Route path='/accesorios/SegundaPreentregaReact-MaximilianoTrochon/:productId' element={<ItemDetail/>}/>           
        </Routes>
    </Router>
    </ContextProvider>
    </div>
    
  )
  
}

export default App;
