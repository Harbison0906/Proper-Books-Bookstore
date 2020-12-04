import * as express from 'express';
import * as passport from 'passport';
import * as morgan from 'morgan';
import routes from './routes';
import './middleware/localstrategy';
import './middleware/bearerstrategy';
import cors = require('cors');
import path = require('path');

const app = express();


app.use(cors());
app.use(passport.initialize());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));
app.use(routes);
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
