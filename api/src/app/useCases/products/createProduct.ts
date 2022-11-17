import { Request, Response } from 'express';
import { Product } from '../../models/product';

export async function createProduct(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const {
      name, description, price, category, ingredients,
    } = req.body;

    const newProduct = {
      name,
      description,
      imagePath,
      price: Number(price),
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
    };

    const product = await Product.create(newProduct);

    res.status(201).json(product);
  } catch {
    res.status(500);
  }
}
