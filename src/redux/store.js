import { configureStore } from '@reduxjs/toolkit'
import { logger } from 'redux-logger';

import alertReducer from './reducers/alertReducer'
import counterReducer from './reducers/counterReducer';

export const store = configureStore({
    reducer: {
        alert: alertReducer,
        counter: counterReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});