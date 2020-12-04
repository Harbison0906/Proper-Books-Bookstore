import { RequestHandler } from 'express';
import { ReqUser } from '../utils/types';


export const isLoggedIn: RequestHandler = (req: ReqUser, res, next) => {
  console.log('test test')
  if(!req.user || req.user.role !== 'admin') {
    console.log('Not logged in!')
    return res.sendStatus(401);
  } else {
    return next();
  }
  };