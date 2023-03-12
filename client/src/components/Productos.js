import React, { useEffect } from "react"
import {useState} from "react"
import Table from 'react-bootstrap/Table';
import NuevoProductoDos from "./NuevoProductoDos";
// import { QRCode } from "antd";
import axios from "axios";


const Productos =  () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {

            fetch('http://localhost:3002/api/products')
            .then((resp) => resp.json())
            .then((data) => {setProductos(data)})
    
            
            
    }, [])
    console.log(productos)

    // const url = `http://localhost/3002/api/products/${productos}`

    const borrarProducto = () => {
      axios.delete(`http://localhost/3002/api/products`)
  

    }


  return (

      <>
      <NuevoProductoDos/>

         <Table striped bordered hover variant="dark" className="my-4">
      <thead>
        <tr>
          <th>Producto</th>
          <th>Descripcion</th>
          <th>Precio</th>
        </tr>
      </thead>

      {productos.map((prod) => {
        return(
          <tbody key={prod._id}>
          <tr>
            <td>{prod.name}</td>
            <td>{prod.description}</td>
            <td>{prod.price}</td>
            
            {/* <td> <QRCode value={url}/></td> */}
          </tr>
          </tbody>
          )
      })
   }
    </Table>
      </> 
    )
}

export default Productos