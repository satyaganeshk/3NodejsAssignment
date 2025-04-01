import dotenv from 'dotenv';

dotenv.config();  // Load .env variables

console.log('DB Password Loaded:', process.env.DB_PASSWORD ? 'Yes' : 'No'); // Debugging

import express from 'express';
import sequelize from './db';
import weatherRoutes from './weatherRoute';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', weatherRoutes); 
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected');
    return sequelize.sync();
  })
  .then(() => {
    console.log('Models synchronized with DB');
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((err) => console.error('DB Connection Error:', err));
