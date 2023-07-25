import express from 'express';
import logger from '../../utilities/logger';
const state = express.Router();

state.get('/', logger, (req, res) => {
  res.send('visited a State');
});

export default state;