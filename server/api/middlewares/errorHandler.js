import httpStatus from 'http-status';
import { appConfig } from '#config/app.js';

// eslint-disable-next-line no-unused-vars
export const errorHandler = (err, req, res, next) => {
  const errorStatus = err.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
  const errorMessage = err.message || 'Something went wrong';

  appConfig.nodeEnv === 'development' && console.error(err);

  res.status(errorStatus).json({
    success: false,
    message: errorMessage,
    stack: appConfig.nodeEnv === 'development' ? err.stack : {},
  });
};
