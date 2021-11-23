import { call, put } from 'redux-saga/effects';
import appAction from '../redux/app';

function* getSubNodes(api, action) {
  try {
    const { tagLabelName } = action;
    yield put(appAction.setLoadersFlag(tagLabelName, true));
    const response = yield call(api.getSubNodes, { tagLabelName });
    yield put(appAction.setLoadersFlag(tagLabelName, false));

    if (response.status !== 200) return;

    yield put(appAction.getSubNodesSuccess(tagLabelName, response.data));
  } catch (e) {
    console.log('error');
  }
}

export default {
  getSubNodes,
};
