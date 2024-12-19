import cors from 'cors';
import express, { Application } from 'express';

const app: Application = express();

app.use(express.json());
app.use(cors());

//--------api Routes--------


app.get('/', (req, res) => {
  res.send('Asserment 3 ');
});

export default app;
