import express from 'express';
import state from './api/state';
import countries from './api/countries';
import region from './api/region';
const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('main api route');
  });

  routes.use('/state', state);
  routes.use('/countries', countries);
  routes.use('/region', region);
  export default routes;