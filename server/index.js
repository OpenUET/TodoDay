import { errorHandler } from '#api/middlewares/errorHandler.js';
import router from '#api/routes/index.js';
import { appConfig } from '#config/app.js';
import { corsOptions } from '#config/cors.js';
import cors from 'cors';
import express from 'express';
import httpStatus from 'http-status';
import mongoose from 'mongoose';
const app = express();

setupMiddlewares();
initRoutes();
setupErrorHandler();
startServer();

function setupMiddlewares() {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors(corsOptions));
}

function initRoutes() {
  app.use(appConfig.routePrefix, router);
  app.get('/', (_, res) => {
    res.json({
      title: appConfig.name,
      mode: appConfig.nodeEnv,
    });
  });
  app.get('*', (_, res) => {
    res.status(httpStatus.NOT_FOUND).json({
      message: '404 Not Found',
    });
  });
  
  (async () => {
    try {
      await mongoose.connect(appConfig.mongoURI,{
        dbName: 'tododay',
      });
      console.log("Connect to mongoose is successful!");
    } catch (error) {
      console.log("Caught! Cannot connect to mongodb: ", error);
    }
  })();
  
}

function setupErrorHandler() {
  app.use(errorHandler);
}

function startServer() {
  app.listen(appConfig.port, () => {
    console.info(
      `\n✅ Server running on http://${appConfig.host}:${appConfig.port}
            (Environment: ${appConfig.nodeEnv})`,
    );
  });
}
