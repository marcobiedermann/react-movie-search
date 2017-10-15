import { applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

const middleware = applyMiddleware(logger);

export default middleware;
