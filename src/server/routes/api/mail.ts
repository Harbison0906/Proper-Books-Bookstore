import * as express from 'express';
import * as mailgunLoader from 'mailgun-js';
import config from '../../config';


const router = express.Router();


let mailgun = mailgunLoader({
  apiKey: config.mailgun.key,
  domain: config.mailgun.domain
});

const sendEmail = (from: string, to: string, subject: string, content: string) => {
  let data = {
    from,
    to,
    subject,
    text: content
  };
  return mailgun.messages().send(data);
};

router.post('/', async (req, res, next) => {
  try {
    await sendEmail(req.body.email, 'seth.harbison@gmail.com', req.body.subject, req.body.message)
    res.send('Email successfully sent!');
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'bad code', error});
  }
})

export default router;