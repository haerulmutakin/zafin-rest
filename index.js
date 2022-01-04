import express from 'express';
// const appRoutes =  require('./src/routes');

const app = express();
app.get('/', (req, res) => res.send('ahaiiiii'))
// app.use('/v1/api', appRoutes);


app.listen(process.env.PORT, () => console.log('application running on port', process.env.PORT));
