import { Request, Response } from 'express';
import { Order } from '../../models/order';

export async function createOrder(req: Request, res: Response) {
  try {
    const { table, products } = req.body;

    const newOrder = {
      table,
      products,
    };

    const category = await Order.create(newOrder);

    res.status(201).json(category);
  } catch {
    res.status(500);
  }
}
