import { createReducer, createActions } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  setLoadersFlag: ['loaderName', 'isLoad'],
  getSubNodesSuccess: ['tagLabelName', 'data'],
  getSubNodes: ['tagLabelName'],
});

export const AppTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  loaders: {},
  nodesMap: {},
};

/* ------------- Selectors ------------- */
export const appSelectors = {
  isLoaderObj: (state) => state.app.loaders,
  subNodes: (tagLabelName, state) => state.app.nodesMap[tagLabelName],
  nodesMap: (state) => state.app.nodesMap,
};

/* ------------- Reducers ------------- */
export const setLoadersFlagReducer = (state = INITIAL_STATE, action) => {
  const { isLoad, loaderName } = action;
  return {
    ...state,
    loaders: {
      ...state.loaders,
      [loaderName]: isLoad,
    },
  };
};

export const getSubNodesSuccessReducer = (state = INITIAL_STATE, action) => {
  const { data, tagLabelName } = action;
  return {
    ...state,
    nodesMap: { ...state.nodesMap, [tagLabelName]: data },
  };
};
/* ------------- Hookup Reducers To Types ------------- */

export const reducerApp = createReducer(INITIAL_STATE, {
  [Types.SET_LOADERS_FLAG]: setLoadersFlagReducer,
  [Types.GET_SUB_NODES_SUCCESS]: getSubNodesSuccessReducer,
});
