import * as express from 'express';
import * as passport from 'passport';
import booksRouter from './books';
import categoriesRouter from './categories';
import donateRouter from './donate';
import mailRouter from './mail';

const router = express.Router();

router.use((req, res, next) => {
  passport.authenticate('bearer', {session: false}, (err, user, info) => {
    if(user) req.user = user;
    return next();
  })(req, res, next);
})

router.use('/books', booksRouter);
router.use('/categories', categoriesRouter);
router.use('/donate', donateRouter);
router.use('/mail', mailRouter);



export default router;