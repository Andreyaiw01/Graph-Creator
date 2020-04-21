import React from 'react';
import SidebarContainer from './SidebarContainer';
import GraphContainer from './GraphContainer';
import { Row } from 'react-bootstrap';

export default function MainContainer(){
    return (
        <>      
            <Row>
                <GraphContainer />
                <SidebarContainer />
            </Row>
        </>
    )    
}