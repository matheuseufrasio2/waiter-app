import { Request, Response } from 'express';
import { Order } from '../../models/order';

export async function cancelOrder(req: Request, res: Response) {
  try {
    const { orderId } = req.params;

    await Order.findByIdAndDelete(orderId);

    res.send(204);
  } catch {
    res.status(500);
  }
}
