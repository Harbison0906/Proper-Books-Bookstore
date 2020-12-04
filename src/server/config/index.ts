import * as dotenv from 'dotenv';

const envFound = dotenv.config();

if(!envFound) {
  throw new Error('.env file not found')
}

export default {
  mysql: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
  },
  auth: {
    secret: process.env.JWT_SECRET,
  },
  stripe: {
    key: process.env.STRIPE_SKT
  }, 
  mailgun: {
    key: process.env.MAILGUN_KEY,
    domain: process.env.MAILGUN_DOMAIN
  }
}