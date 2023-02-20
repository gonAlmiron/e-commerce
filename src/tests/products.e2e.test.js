import { ProductModel } from "../persistence/daos/dao-MongoDB/schemas/product";
import mongoose from "mongoose";
import app from "../services/server";
import request from "supertest";

describe('************** TESTS SERVER PRODUCTS **************', () => {
  beforeEach(async() => {
    await mongoose.connection.collections['products'].drop();
  })
  it('create new product', async () => {
    const doc = {
      name: 'Pendrive 128GB Kingston USB',
      description: 'Pendrive ADATA 4.0 de dimensiones pequeñas y facil de transportar',
      price: 3200
    }
    const response = await request(app)
      .post('/api/products')
      .send(doc)
    expect(response.statusCode).toBe(200)
    expect(response.body.name).toBe(doc.name);
    expect(response.body.body).toBe(doc.body);


  })


it('get all products', async() => {
  const doc = {
    name: 'Pendrive 128GB Kingston USB',
    description: 'Pendrive ADATA 4.0 de dimensiones pequeñas y facil de transportar',
    price: 3200
  }
  await ProductModel.create(doc)
  const response = await request(app)
  .get('/api/products')

  expect(response.body[0].name).toBe(doc.name)
  expect(response.body).toBeInstanceOf(Array)

})
})