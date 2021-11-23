import { takeLatest } from 'redux-saga/effects';
import sagaApp from './saga_app';
import API from '../requestAPI/API';
// Action types
import { AppTypes } from '../redux/app';

function* mySaga() {
  yield takeLatest(AppTypes.GET_SUB_NODES, sagaApp.getSubNodes, API);
}

export default mySaga;
