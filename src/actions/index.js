import * as types from '../constants/ActionsTypes';
import { EMPTY_EDGE_TYPE, EMPTY_TYPE } from '../components/graph-config'; // Configures node/edge types

export const openAddNodesForm = value => ({
  type: types.OPEN_ADDFORM,
  payload: value
})

export const openUpdateNodeForm = value => ({
  type: types.OPEN_UPDATEFORM,
  payload: value
})

export const addNode = (nodeId, value) => ({
  type: types.ADD_NODE,
  payload: {
    id: nodeId,
    title: value,
    x: Math.floor(Math.random() * Math.floor(400)),
    y: Math.floor(Math.random() * Math.floor(400)),
    type: EMPTY_TYPE
  }
})

export const addEdge = (sourceNode, targetNode) => ({
  type: types.ADD_EDGE,
  payload: {
    id: Math.floor(Math.random() * Math.floor(100000000)),
    source: sourceNode,
    target: targetNode,
    type: EMPTY_EDGE_TYPE
  }
})

export const deleteEdge = (id) => ({
  type: types.DELETE_EDGE,
  payload: id
})

export const setvalueInputNode1 = value => ({
  type: types.SET_VALUENODE1,
  payload: value
})

export const setvalueInputNode2 = value => ({
  type: types.SET_VALUENODE2,
  payload: value
})

export const setSelected = value => ({
  type: types.SELECTED_EL,
  payload: value
})

export const updateNode = (nodeId, valueTitle) => ({
  type: types.UPDATE_NODE,
  payload: {
    id: nodeId,
    value: valueTitle
  }
})

  