import { Router } from 'express';
// import someRouter from '/somePath';

const router = Router();

// router.use('/somePath', someRouter);

router.get('/', async (req, res) => {
  try {
    res.json('TEST');
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'bad code', error});
  }
})

export default router;