import * as express from 'express';
import * as passport from 'passport';
import { createToken } from '../../utils/tokens';
import { ReqUser } from '../../utils/types';


const router = express.Router();


router.post('/', passport.authenticate('local'), async (req: ReqUser, res) => {
  try {
    let token = await createToken({ userid: req.user.id })
    res.json({
      token,
      role: req.user.role,
      userid: req.user.id
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'bad code', error});
  }
})

export default router;