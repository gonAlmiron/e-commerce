import React, { useEffect } from "react"
import {useState} from "react"

const Productos =  () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {

            fetch('http://localhost:3002/api/products')
            .then((resp) => resp.json())
            .then((data) => {setProductos(data)})
            
            
    }, [])
    console.log(productos)

    return(
      <>
      
        {productos.map((prod) => {
            return (
                <div className="container my-5" key={prod._id} >
                    <h3>Nombre del producto: {prod.name}</h3>
                    <h3>Descripcion: {prod.description}</h3>
                    <h3>Precio: ${prod.price}</h3>
                </div>
                
            )
        })}
      
      </>
      
    )

}

export default Productos