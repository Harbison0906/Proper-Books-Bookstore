import * as express from 'express';
import db from '../../db';
import { generateHash } from '../../utils/passwords';
import { createToken } from '../../utils/tokens';


const router = express.Router();


router.post('/', async (req, res) => {
  const newUser = req.body;
  newUser.password = generateHash(newUser.password)
  try {
    const cannedResponse = await db.users.insert(newUser)
    const token = await createToken({ userid: cannedResponse.insertId })
    res.json(token);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'bad code', error });
  }
})

export default router;