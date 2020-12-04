import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import config from '../config';
import db from '../db';
import { IPayload } from './types';

export const createToken = async (payload: IPayload) => {
  let tokenid: any = await db.tokens.insert(payload.userid);
  payload.accesstokenid = tokenid.insertId;
  payload.unique = crypto.randomBytes(32).toString('hex');
  const token = jwt.sign(payload, config.auth.secret, { expiresIn: '10d' });
  await db.tokens.update(payload.accesstokenid, token);
  return token;
}

export const validToken = async (token: string) => {
  let payload: IPayload = <IPayload>jwt.verify(token, config.auth.secret);
  let [accesstokenid] = await db.tokens.findOne(payload.accesstokenid, token);
  if (!accesstokenid) {
    throw new Error('Invalid Token!');
  } else {
    console.log('valid token')
    return payload;
  }
}

