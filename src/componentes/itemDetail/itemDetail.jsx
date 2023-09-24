import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { productos } from '../../productos/productos'
import "./itemDetail.css"
import Button from 'react-bootstrap/esm/Button'
import Randomusers from '../../randomUsers/randomusers'

const ItemDetail = () => {
  const {productId} = useParams()
  const producto = productos.find(p => p.id == productId)
  const {id,nombre,precio, imagen,categoria,stock} = producto
  let url;
  (categoria === "Remera")?url = `/`:(categoria === "Accesorio")?url = `/accesorios`:url = `/calzado`;

    return (
        <div className='text-center'>

    <div className='col-6 py-1 mt-3 mx-auto itemdetail'>
      <h1>{categoria} {nombre}</h1>            
      <img src={imagen} />
      <p>Stock: {stock}</p>
      <p>Precio: ${precio}</p>
    </div>
      <Button className="boton " as={Link} to={url}>Volver</Button>
        <Randomusers/>
    </div>

  )
}

export default ItemDetail