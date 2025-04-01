import dotenv from 'dotenv';



const envConfigs = {
  dbName: process.env.DB_NAME as string,
  dbUser: process.env.DB_USER as string,
  dbPassword: process.env.DB_PASSWORD as string,
  dbHost: process.env.DB_HOST as string,
  dbDialect: process.env.DB_DIALECT || 'postgres',
  dbPort: Number(process.env.DB_PORT) || 5432,
  logging: process.env.DB_LOGGING === 'true',
  apiNinjasKey: process.env.API_NINJAS_KEY as string,
  rapidApiKey: process.env.RAPIDAPI_KEY as string
};

export default envConfigs;