import * as express from 'express';
import config from '../../config';


const router = express.Router();


const stripe = require('stripe')(config.stripe);

const charge = (token: string, amt: number) => {
  return stripe.charges.create({
    amount: amt * 100,
    currency: 'usd',
    source: token,
    description: 'Statement Description'
  });
}

router.post('/api/donate', async (req, res, next) => {
  try {
    let data = await charge(req.body.token.id, req.body.amount);
    console.log(data);
    res.send("Charged!");
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'bad code', error});
  }
})

export default router;