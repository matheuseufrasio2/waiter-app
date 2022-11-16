import { Request, Response } from 'express';
import { Category } from '../../models/category';

export async function listCategories(req: Request, res: Response) {
  const categories = await Category.find();

  return res.json(categories);
}
