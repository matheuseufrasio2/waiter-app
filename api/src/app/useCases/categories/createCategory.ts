import { Request, Response } from 'express';
import { Category } from '../../models/category';

export async function createCategory(req: Request, res: Response) {
  try {
    const { name, icon } = req.body;

    if (!name) {
      return res.status(400).json({
        error: 'Name is required!',
      });
    }

    const newCategory = {
      name,
      icon,
    };

    const category = await Category.create(newCategory);

    res.status(201).json(category);
  } catch {
    res.status(500);
  }
}
