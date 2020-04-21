import * as types from '../constants/ActionsTypes';

const initialState = {
    nodes: [],
    edges: [],
    showAddNodesForm: false,
    showUpdateNodeForm: false,
    valueInputNode1: '',
    valueInputNode2: '',
    selected: {
        id: null,
        title: '',
        type: '',
        x: null,
        y: null
    }
}

const rootReducers = (state = initialState, action) => {
    switch(action.type) {
        case types.OPEN_ADDFORM:
            return  {...state, showAddNodesForm: action.payload };
        case types.OPEN_UPDATEFORM:
            return  {...state, showUpdateNodeForm: action.payload };
        case types.SELECTED_EL:
            return  {...state, selected: action.payload };                        
        case types.SET_VALUENODE1:
            return  {...state, valueInputNode1: action.payload };
        case types.SET_VALUENODE2:
            return  {...state, valueInputNode2: action.payload };                        
        case types.ADD_NODE:
            return {
                ...state, 
                nodes: [...state.nodes, action.payload]
            }
        case types.ADD_EDGE:
            return {
                ...state, 
                edges: [...state.edges, action.payload]
            }
        case types.DELETE_EDGE:
            return {
                ...state,
                edges: [...state.edges.filter(edge => edge.id != action.payload)]
            }
        case types.UPDATE_NODE:
            const nodesMas = state.nodes.slice();   
            let foundIndex = state.nodes.findIndex(node => node.id == action.payload.id );   
            nodesMas[foundIndex].title = action.payload.value;
            return {
                ...state,
                nodesMas          
            }                                               
        default: 
            return  state;
    }
}

export default rootReducers;