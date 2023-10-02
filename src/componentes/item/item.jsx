import React from 'react'
import './item.css'
import ItemDetail from '../itemDetail/itemDetail';


import Button from 'react-bootstrap/Button';
import {Router,Link,Route,Routes} from "react-router-dom"

const Item = (props) => {
  const {id,nombre,precio, imagen,categoria,stock} = props.data
  let url;
  (categoria === "Remera")?url = `/${id}`:(categoria === "Accesorio")?url = `/accesorios/${id}`:url = `/calzado/${id}`;
  return (

    
    <div className='producto'>
      
      {(stock>0)?<p><img src={imagen}/> {categoria}: {nombre} (${precio})<Button as={Link} to={url} className='boton botondetalle' variant="primary">Ver detalle</Button></p>:<p ><img src={imagen}/> <span className='no-disponible'>{categoria}: {nombre} (no disponible) </span> <Button as={Link} to={url} className='boton botondetalle' variant="primary">Ver detalle</Button></p>}
    
    </div>
    
  )
}

export default Item