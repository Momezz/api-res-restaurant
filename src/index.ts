import * as dotenv from 'dotenv';
import express from 'express';
import configExpress from './config/express';
import configDb from './config/database';

dotenv.config();
const port = process.env.PORT || 8080;
const app = express();

app.get('/ruta-prueba', (req, res) => {
  return res.status(200).json(
    {
      "id": 1,
      "nombre": "Julian"
    }
  );
})

configExpress(app);
configDb();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
