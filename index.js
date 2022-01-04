import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
const port = process.env.PORT || 5000;
import appRoutes from './src/routes/index.js';

const app = express();

var corsOptions = {
    origin: '*'
  }
app.use(cors(corsOptions));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/v1/api/user', appRoutes);


app.listen(port, () => console.log('application running on port', port));
