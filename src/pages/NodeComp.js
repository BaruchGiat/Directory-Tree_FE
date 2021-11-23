import React from 'react';
import { Icon, List } from 'semantic-ui-react';

const NodeComp = ({
  tagLabelName,
  activeTagObj,
  toggleNode,
  subNodes,
  nodesMap,
  isLoader,
  isLoaderObj,
  iconName = 'folder',
}) => (
  <List.Item>
    <List.Icon onClick={() => toggleNode(tagLabelName)} name={`caret ${activeTagObj[tagLabelName] ? 'down' : 'right'}`} />
    {isLoader ? <Icon loading name="spinner" />
      : <List.Icon name={iconName} />}
    <List.Content>
      <List.Header>{tagLabelName}</List.Header>
      {activeTagObj[tagLabelName] && subNodes && subNodes.length > 0 && (
      <List.List>

        {subNodes.map((subTagLabelName) => (
          <NodeComp
            key={subTagLabelName}
            tagLabelName={subTagLabelName}
            activeTagObj={activeTagObj}
            toggleNode={toggleNode}
            subNodes={nodesMap && nodesMap[subTagLabelName]}
            isLoader={isLoaderObj && isLoaderObj[subTagLabelName]}
            nodesMap={nodesMap}
            isLoaderObj={isLoaderObj}
          />
        ))}
      </List.List>
      )}
    </List.Content>
  </List.Item>
);

export default NodeComp;
