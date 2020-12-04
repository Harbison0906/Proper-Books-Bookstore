import * as express from 'express';
import db from '../../db'

const router = express.Router();

//Get ALL Categories or get ONE category by id
router.get('/:id?', async (req, res) => {
  const id = Number(req.params.id);
  try {
    if (id) {
      const [category] = await db.categories.one(id);
      res.json(category);
    } else {
      const categories = await db.categories.all();
      res.json(categories);
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'bad code', error });
  }
})

export default router;
