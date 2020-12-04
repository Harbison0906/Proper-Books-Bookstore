import * as express from 'express';
import db from '../../db';
import { isLoggedIn } from '../../middleware/auth-middlewares';
import { ReqUser } from '../../utils/types';



const router = express.Router();

//Get ALL books or ONE book by id
router.get('/:id?', async (req, res) => {
  const id = Number(req.params.id);
  try {
    if (id) {
      const [book] = await db.books.one(id);
      res.json(book)
    } else {
      const books = await db.books.all();
      res.json(books)
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'bad code', error});
  }
})

//Add a new book
router.post('/', isLoggedIn, async (req: ReqUser, res) => {
  const book = req.body
  try {
    const result = await db.books.insert(book.categoryid, book.title, book.author, book.price)
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'bad code', error});
  }
})

//Edit a book
router.put('/:id', isLoggedIn, async (req, res) => {
  const id = Number(req.params.id);
  const book = req.body
  try {
    await db.books.update(book.categoryid, book.title, book.author, book.price, id)
    res.json('Book Updated!');
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'bad code', error});
  }
})

//Delete a book
router.delete('/:id', isLoggedIn, async (req: ReqUser, res) => {
  const id = Number(req.params.id);
  try {
    await db.books.destroy(id)
    res.json('Book Deleted');
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'bad code', error});
  }
})

export default router;