import cors from 'cors';
import express, { Application } from 'express';
import router from './app/Module/userModel/user.router';

const app: Application = express();

app.use(express.json());
app.use(cors());

//--------api Routes--------
app.use('/api',router)

app.get('/', (req, res) => {
  res.send('Asserment 3 ');
});

export default app;
