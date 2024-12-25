  import { all } from 'redux-saga/effects';
  import authSaga from './Loginuser/saga';
  
  export default function* rootSaga() {
    yield all([authSaga()]);
  }
  