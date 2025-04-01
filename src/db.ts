import { Sequelize } from 'sequelize';
import envConfigs from './envConfigs';

const sequelize = new Sequelize(
  envConfigs.dbName,
  envConfigs.dbUser,
  envConfigs.dbPassword,
  {
    host: envConfigs.dbHost,
    dialect: envConfigs.dbDialect as any, // Cast to 'any' if TypeScript complains
    port: envConfigs.dbPort,
    logging: envConfigs.logging,
  }
);

sequelize.authenticate()
  .then(() => console.log('Database connected successfully.'))
  .catch((err) => console.error('Unable to connect to the database:', err));

export default sequelize;
