import express from 'express';

const router = express.Router();

// locahost:5000/posts
router.get('/', (req, res) => {
  res.send('This works!');
});

export default router;
