import React from 'react';
import { openAddNodesForm, openUpdateNodeForm } from '../actions';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import HeaderComponent from '../components/Header/HeaderComponent';

export default function HeaderContainer(){
    const state = useSelector(state => state, shallowEqual );
    const dispatch = useDispatch();
    const showAddForm = () => {
        if(state.showUpdateNodeForm) dispatch(openUpdateNodeForm(false)); 
        dispatch(openAddNodesForm(!state.showAddNodesForm));
    }
    
    return (
        <>
            <HeaderComponent 
                handleClick={ showAddForm }
                showAddNodesForm={state.showAddNodesForm}
            />
        </>
    )    
}