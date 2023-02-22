import React from "react"
import axios from "axios";
import {useState} from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const NuevoProductoDos = (props) =>  {


    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')

    
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post("http://localhost:3002/api/products",
        {name, description, price}
        )
      } 
        catch(err) {
            console.log(err.message)
            console.log(err.stack)
      }
    }

  return (
    <div className="container my-5">
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter product"  onChange={(e) => {setName(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" name="description" placeholder="Description"  onChange={(e) => {setDescription(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Price</Form.Label>
        <Form.Control name="price" type="number" placeholder="Price"  onChange={(e) => {setPrice(e.target.value)}}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default NuevoProductoDos