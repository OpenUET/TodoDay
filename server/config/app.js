import dotenv from 'dotenv';

dotenv.config();

function env(key, defaultValue = null) {
  return process.env[key] || defaultValue;
}

export const appConfig = Object.freeze({
  nodeEnv: env('NODE_ENV', 'development'),
  name: env('APP_NAME', 'TodoDay'),
  host: env('APP_HOST', '127.0.0.1'),
  port: Number(env('APP_PORT', 3333)),
  routePrefix: env('APP_ROUTE_PREFIX'),
  mongoURI: env('MONGO_URI'),
});
