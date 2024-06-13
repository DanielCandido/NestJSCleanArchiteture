import env from 'env-var';

// const config = {
//   databaseUrl: env.get('DATABASE_URL').required().asString(),
//   mongoURI: env.get('MONGO_URI').required().asString(),
//   runCrons: env.get('RUN_CRONS').required().asBool(),
//   env: env
//     .get('ENVIRONMENT')
//     .required()
//     .asEnum(['DEVELOPMENT', 'PRODUCTION', 'HOMOLOG']),
//   secretJWT: env.get('SECRET_JWT').required().asString(),
//   port: env.get('PORT').required().asPortNumber(),
//   baseUrl: env.get('BASE_URL').required().asUrlString(),
// };

const config = {
  databaseUrl: process.env.DATABASE_URL,
  mongoURI: process.env.MONGO_URI,
  runCrons: process.env.RUN_CRONS,
  env: process.env.ENVIRONMENT,
  secretJWT: process.env.SECRET_JWT,
  port: process.env.PORT,
  baseUrl: process.env.BASE_URL,
};

export default config;
