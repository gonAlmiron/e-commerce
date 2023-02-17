import { ProductModel } from "../persistence/daos/dao-MongoDB/schemas/product";
import app from "../services/server";
import mongoose from "mongoose";
import request from "supertest";

describe('TESTS SERVER PRODUCTS', () => {
  beforeEach(async() => {
    await mongoose.connection.collections['products'].drop();
  })

  it('create new', async () => {
    const doc = {
      name: 'Pendrive 32GB Kingston USB',
      description: 'Pendrive ADATA 4.0 de dimensiones pequeñas y facil de transportar',
      price: 3200
    }
    const response = await request(app)
      .post('/products')
      .send(doc)
    expect(response.statusCode).toBe(200);
    expect(response.body.title).toBe(doc.title);
    expect(response.body.body).toBe(doc.body);


  })
}
)