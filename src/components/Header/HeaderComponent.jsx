import React from 'react';
import { Container, Row, Col, Navbar, Button } from 'react-bootstrap';
import Header from './style'; 

export default function HeaderComponent(props) {    
    return (
        <Header>
            <Container fluid>
                <Row >                 
                    <Col md={{ offset: 2}} className="text-center">
                        <Navbar.Brand >Graph Creator</Navbar.Brand>
                    </Col>
                    <Col md={2}>                    
                        <Button 
                                onClick={props.handleClick}
                                aria-controls="sidebarAddNodesForm"
                                aria-expanded={props.showAddNodesForm}
                            >
                            Добавить Node
                        </Button> 
                    </Col>
                </Row>
            </Container>
        </Header>              
    )
}
