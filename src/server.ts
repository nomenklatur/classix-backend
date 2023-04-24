import express, { Express, Request, Response} from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
dotenv.config();

if (!process.env.APP_PORT){
  process.exit(1);
}

const PORT: number = parseInt(process.env.APP_PORT, 10);
const app: Express = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});