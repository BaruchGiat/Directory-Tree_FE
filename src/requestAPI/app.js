import request from './index';

export default {
  getSubNodes: ({ tagLabelName }) => request({ method: 'get', url: `get-sub-nodes/${tagLabelName}` }),
};
