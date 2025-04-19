import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { calculatePoints } from './logic.js';
import store from './store.js';

const router = express.Router();

router.post('/receipts/process', (req, res) => {
  const id = uuidv4();
  const points = calculatePoints(req.body);
  store.set(id, points);
  res.json({ id });
});

router.get('/receipts/:id/points', (req, res) => {
  const points = store.get(req.params.id);
  if (points === undefined) {
    return res.status(404).json({ error: 'Receipt not found' });
  }
  res.json({ points });
});

export default router;
