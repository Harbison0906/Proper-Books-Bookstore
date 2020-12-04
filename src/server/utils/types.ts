import * as express from 'express';

export interface IPayload {
  [key: string]: any;
  userid: number;
  unique?: string;
}

export interface ReqUser extends express.Request {
  user: {
    id: number;
    role: string;
  }
}