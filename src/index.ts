import express from 'express';
import { PORT } from './config/config';
import appRoutes from './routes';
require('dotenv/config');

const app = express();
app.use('/v1/api', appRoutes);


app.listen(process.env.PORT, () => console.log('application running on port', PORT));
