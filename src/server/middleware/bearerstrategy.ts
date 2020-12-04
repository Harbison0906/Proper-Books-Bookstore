import * as passport from 'passport';
import * as BearerStrategy from 'passport-http-bearer';

import { validToken } from '../utils/tokens';
import db from '../db';

passport.use(new BearerStrategy.Strategy( async (token, done) => {
  try {
    let payload = await validToken(token);
    let [user] = await db.users.find('id', payload.userid);
    if (user) {
      delete user.password;
      done(null, user); //creates req.user
    } else {
      done(null, false)
    }
  } catch (e) {
    done(e);
  }
}))
