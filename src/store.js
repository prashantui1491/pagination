// import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import authReducer from './Loginuser/reducer';
// import rootsaga from './rootsaga';

// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(authReducer, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(rootsaga);

// export default store;


import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import authReducer from './Loginuser/reducer';
import rootSaga from './rootsaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: authReducer, // Add more reducers here if needed
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;

