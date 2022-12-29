import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

// All the rootes of thge posts.js will be execute
app.use('/posts', postRoutes);

// Setting body parser for sending request properly
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

/* MONGOOS setup */
const CONNECTION_URL =
  'mongodb+srv://m_ankit2108:231208@cluster0.azukqa9.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(`did not connect ${error}`));

mongoose.set('useFindAndModify', false);
