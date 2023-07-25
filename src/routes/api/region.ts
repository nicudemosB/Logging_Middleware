import express from 'express';
const region = express.Router();

region.get('/', (req, res) => {
  res.send('visited an entire region!');
});

export default region;