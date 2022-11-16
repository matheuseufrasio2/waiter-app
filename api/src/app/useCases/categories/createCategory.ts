import { Request, Response } from 'express';
import { Category } from '../../models/category';

export async function createCategory(req: Request, res: Response) {
  try {
    const { name, icon } = req.body;

    const newCategory = {
      name,
      icon,
    };

    const category = await Category.create(newCategory);

    res.status(201).json(category);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
