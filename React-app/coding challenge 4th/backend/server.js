/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import require from 'requirejs';
import movieRouter from './routers/movieRouter.js';
import userRouter from './routers/userRouter.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const cors = require('cors');

const app = express();

const path = `${__dirname}/views/`;

app.use(express.static(path));
require.config();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log('connnection successful');
// eslint-disable-next-line no-unused-vars
}).catch((err) => console.log('no connection'));

const corsOptions = {
  origin: 'http://localhost:8000',
};

app.use(cors(corsOptions));

app.use('/api/user', userRouter);
app.use('/api/movies', movieRouter);

app.get('/', (req, res) => {
  res.send('Server is ready');
  res.sendFile(`${path}index.html`);
});

// app.get('/', (req, res) => {
//   res.send('Server is ready');
// });

app.use((err, req, res) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
