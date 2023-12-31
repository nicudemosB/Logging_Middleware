import express from 'express';
import routes from './routes/index';

const app = express();
const port = 3000;

// define a route handler for the default home page
app.use('/api', routes);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
  
});