import { useEffect, useState } from "react"
import React from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";


const NuevoProductoDos = () => {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')

    
    const handleSubmit = async (e) => {

    
      e.preventDefault();
      try {
        await axios.post("http://localhost:3002/api/products",
        {name, description, price}
        )
        
        alert("Product add ok");
      } 
        catch(err) {
            console.log(err.message)
            console.log(err.stack)
      }
    }
    
    return(
        <>
        <div className="d-grid gap-2">
            <Button variant="secondary" size="lg" onClick={handleShow}>
            Ingresar nuevo producto
            </Button>
        </div>
        <Modal show={show} onHide={handleClose} >

        <Modal.Header closeButton>
          <Modal.Title>Nuevo Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Ingrese el nombre"
                onChange={(e) => {setName(e.target.value)}}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                name="price"
                placeholder="Ingrese el precio"
                onChange={(e) => {setPrice(e.target.value)}}
                />
            </Form.Group>

            <Form.Group
              className="mb-3"
            >
              <Form.Label>Descripción</Form.Label>
              <Form.Control 
              placeholder="Ingrese la descripción"
              name="description"
              as="textarea" 
              rows={3} 
              onChange={(e) => {setDescription(e.target.value)}} 
              />
            </Form.Group>
            <Button type="submit"variant="primary" onClick={handleClose}>
            Ingresar producto
          </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          

        </Modal.Footer>
      </Modal>
        
        </>
    )
}

export default NuevoProductoDos