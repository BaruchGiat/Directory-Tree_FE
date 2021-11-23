import React, { useState } from 'react';
import { connect } from 'react-redux';
import { List, Segment } from 'semantic-ui-react';
import AppActions, { appSelectors } from '../redux/app';
import NodeComp from './NodeComp';

const ROOT_NODE = 'winterfell.westeros.got';

function Home({ getSubNodes, nodesMap, isLoaderObj }) {
  const [activeTagObj, setActiveTagLabel] = useState({});
  const toggleActiveNode = (nodeName) => setActiveTagLabel({
    ...activeTagObj,
    [nodeName]: !activeTagObj[nodeName],
  });
  return (
    <>
      <Segment className="">
        <List className="tree-list">
          <NodeComp
            tagLabelName={ROOT_NODE}
            activeTagObj={activeTagObj}
            toggleNode={(input) => {
              // Check if already exists
              if (!activeTagObj[input] && !nodesMap[input]) { getSubNodes(input); }
              toggleActiveNode(input);
            }}
            subNodes={nodesMap[ROOT_NODE]}
            iconName="globe"
            isLoader={isLoaderObj[ROOT_NODE]}
            isLoaderObj={isLoaderObj}
            nodesMap={nodesMap}
          />
        </List>
      </Segment>
    </>
  );
}

export default connect((state) => ({
  nodesMap: appSelectors.nodesMap(state),
  isLoaderObj: appSelectors.isLoaderObj(state),
}),
{
  getSubNodes: AppActions.getSubNodes,
})(Home);
