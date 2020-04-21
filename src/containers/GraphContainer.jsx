import * as React from 'react';
import { Col } from 'react-bootstrap';
import { GraphView } from 'react-digraph';
import GraphConfig, { NODE_KEY } from '../components/graph-config'; // Configures node/edge types


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
  addNode, 
  addEdge, 
  deleteEdge, 
  openUpdateNodeForm, 
  openAddNodesForm,  
  setSelected 
} from '../actions';

class Graph extends React.Component {
  GraphView;

  constructor(props) {
    super(props);
    this.GraphView = React.createRef();
  }

  // Helper to find the index of a given node
  getNodeIndex(searchNode) {
    return this.props.nodes.findIndex(node => {
      return node[NODE_KEY] === searchNode[NODE_KEY];
    });
  }

  // Helper to find the index of a given edge
  getEdgeIndex(searchEdge) {
    return this.props.edges.findIndex(edge => {
      return (
        edge.source === searchEdge.source && edge.target === searchEdge.target
      );
    });
  }

  // Given a nodeKey, return the corresponding node
  getViewNode(nodeKey) {
    const searchNode = {};

    searchNode[NODE_KEY] = nodeKey;
    const i = this.getNodeIndex(searchNode);

    return this.props.nodes[i];
  }


  /*
   * Handlers/Interaction
   */

  // Called by 'drag' handler, etc..
  // to sync updates from D3 with the graph
  onUpdateNode = (viewNode) => {
    this.props.setSelected(viewNode);
  };

  // Node 'mouseUp' handler
  onSelectNode = (viewNode) => {
    this.props.setSelected(viewNode);
    const { 
      openAddNodesForm, 
      openUpdateNodeForm, 
      selected, 
    } = this.props;
    
    if(openAddNodesForm) openAddNodesForm(false);
    
    if(selected) {
      if(selected.type == "customEmpty") {
        openUpdateNodeForm(true);
      } else {
        openUpdateNodeForm(false);
      }
    } else {
      openUpdateNodeForm(false);
    }    
  };

  // Edge 'mouseUp' handler
  onSelectEdge = (viewEdge) => {
    const { 
      openUpdateNodeForm, 
      setSelected
    } = this.props;
    openUpdateNodeForm(false);
    setSelected(viewEdge);
  };


  //Creates a new node between two edges
  onCreateEdge = (sourceViewNode, targetViewNode) => {
    const {
      addEdge,
      openUpdateNodeForm,
      setSelected
    } = this.props;

    const viewEdge = {
      source: sourceViewNode[NODE_KEY],
      target: targetViewNode[NODE_KEY],
    };

    // Only add the edge when the source node is not the same as the target
    if (viewEdge.source !== viewEdge.target) {
      addEdge(viewEdge.source,viewEdge.target)
      openUpdateNodeForm(false);
      setSelected(viewEdge);
    }
  };

  // Called when an edge is deleted
  onDeleteEdge = (viewEdge) => {
    const {
      deleteEdge,
      setSelected,
      selected
    } = this.props;

    deleteEdge(selected.id);
    openUpdateNodeForm(false);
    setSelected(null);
  };

  /*
   * Render
   */

  render() {
    const { nodes, edges, selected  } = this.props;
    const { NodeTypes, NodeSubtypes, EdgeTypes } = GraphConfig;

    return (
      <Col >
      <div id="graph">
        <GraphView
          ref={el => (this.GraphView = el)}
          nodeKey={NODE_KEY}
          nodes={nodes}
          edges={edges}
          selected={selected}
          nodeTypes={NodeTypes}
          nodeSubtypes={NodeSubtypes}
          edgeTypes={EdgeTypes}
          onSelectNode={this.onSelectNode}
          onUpdateNode={this.onUpdateNode}
          onSelectEdge={this.onSelectEdge}
          onCreateEdge={this.onCreateEdge}
          onDeleteEdge={this.onDeleteEdge}
        />
      </div>
      </Col>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      nodes: state.nodes,
      edges: state.edges,
      showUpdateNodeForm: state.showUpdateNodeForm,
      showAddNodesForm: state.showAddNodesForm,
      selected: state.selected,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    addNode,
    addEdge,
    deleteEdge,
    openUpdateNodeForm,
    openAddNodesForm,
    setSelected,
  },
  dispatch,
)

export default connect(mapStateToProps, mapDispatchToProps)(Graph)
