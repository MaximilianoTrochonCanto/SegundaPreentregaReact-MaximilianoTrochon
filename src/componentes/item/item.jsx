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
      <img src={imagen}/>
      {categoria}: {nombre} <Button as={Link} to={url} className='boton botondetalle' variant="primary">Ver detalle</Button>
    
    </div>
    
  )
}

export default Item