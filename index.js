import express from 'express';
// const appRoutes =  require('./src/routes');

const app = express();
app.get('/', (req, res) => res.send('ahaiiiii'))
// app.use('/v1/api', appRoutes);


app.listen(5000, () => console.log('application running on port', process.env.PORT));
