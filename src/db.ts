import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres', 'postgres', '1258', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  logging: false,
});


sequelize.authenticate()
  .then(() => console.log('✅ Database connection established successfully.'))
  .catch((err) => console.error(' Unable to connect to the database:', err));

sequelize.sync()
  .then(() => console.log('✅ Models synchronized with the database.'))
  .catch((err) => console.error(' Unable to synchronize models with the database:', err));

export default sequelize;
