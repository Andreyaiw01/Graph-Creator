import React, { Component } from 'react';
import { addNode, addEdge, updateNode } from '../actions';
import AddNodesComponent from '../components/AddNodes/AddNodesComponent';
import UpdateNodeComponent from '../components/UpdateNode/UpdateNodeComponent';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SidebarContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            valueInputNode1: '',
            valueInputNode2: '',
            update: null
        }
        
        this.findNodes = this.findNodes.bind(this);
        this.findLastNodeId = this.findLastNodeId.bind(this);
        this.addNodes = this.addNodes.bind(this);
        this.updateNode = this.updateNode.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.createNodefeature = this.createNodefeature.bind(this);

    }

    handleInput(e) {
        switch(e.target.id) {
            case 'node1': 
                this.setState({valueInputNode1: e.target.value})
                break;
            case 'node2': 
                this.setState({valueInputNode2: e.target.value})
                break;
            default: 
                break;
        };        
    }


    findNodes(nodeTitle){
       return this.props.nodes.find(node => node.title == nodeTitle);
    }

    findLastNodeId() {
        let lastIndex;
        let lastNodeId;
        let nodes = this.props.nodes
        if(nodes.length) {
            lastIndex = nodes.length - 1;
            return lastNodeId = nodes[lastIndex].id;            
        } else {
            return false
        }
    }

    createNodefeature(){
        let feature
        return feature = {
            id: Math.floor(Math.random() * Math.floor(10000000000))
        }
    }

    addNodes(e) {     
        var valueInputNode1 = e.target.node1.value;
        var valueInputNode2 = e.target.node2.value;
        const {nodes, addNode, addEdge} = this.props
        if(nodes.length > 0) {
            let lastNodeId = this.findLastNodeId();                          
            if(valueInputNode1) { 
                let feature = this.createNodefeature();
                let findNode = this.findNodes(valueInputNode1);
                if(findNode) {
                    console.log('Node1: There is same Node in mas');  
                } else {
                    addNode(feature.id, valueInputNode1);
                    addEdge(feature.id, lastNodeId);                   
                }
            }
            if(valueInputNode2) {
                let feature = this.createNodefeature();
                let findNode = this.findNodes(valueInputNode2);
                if(findNode) {
                    console.log('Node2: There is same Node in mas')                    
                } else{
                    addNode(feature.id,valueInputNode2);
                    addEdge(feature.id, lastNodeId);                      
                }
            }                     
        } else {
            if(valueInputNode1) { 
                let feature = this.createNodefeature();
                addNode(feature.id,valueInputNode1);              
            }
            if(valueInputNode2) {
                let feature = this.createNodefeature();
                addNode(feature.id,valueInputNode2);
            }            
        }         
        e.preventDefault();                    
    }

    updateNode(e) {
        const {selected, updateNode} = this.props
        let valueInputNode1 = e.target.node1.value;
        let id = selected.id;
        let findNode = this.findNodes(valueInputNode1);
        if(findNode) {
            console.log('Node1: There is same Node in mas'); 
        } else{
            updateNode(id, valueInputNode1);
            this.setState({
                update: Date.now()
            });
        }
        e.preventDefault();
    }

    render(){
        return (
            <>
            
                {
                    this.props.showAddNodesForm && 
                    <AddNodesComponent 
                        addNodes={this.addNodes}
                    />
                }
                    
                {
                    this.props.showUpdateNodeForm && 
                    <UpdateNodeComponent 
                        selected={this.props.selected}
                        updateNode={this.updateNode}
                    />
                }
            </>
        )
    }    
}

const mapStateToProps = (state) => {
    return {
        nodes: state.nodes,
        edges: state.edges,
        showAddNodesForm: state.showAddNodesForm,
        showUpdateNodeForm: state.showUpdateNodeForm,
        selected: state.selected
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(
    {
      addNode,
      addEdge,
      updateNode
    },
    dispatch,
  )

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer)
