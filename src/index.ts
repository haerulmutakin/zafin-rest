import express from 'express';
import appRoutes from './routes';

const app = express();
app.use('/v1/api', appRoutes);


app.listen(process.env.PORT, () => console.log('application running on port', process.env.PORT));
