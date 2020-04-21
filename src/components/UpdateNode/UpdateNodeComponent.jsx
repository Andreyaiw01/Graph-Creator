import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import Sidebar from '../GlobalStyles/Sidebar';
import NodeInfo from './style';

export default function UpdateNodeComponent(props){
    const [valueInputNode1, setvalueInputNode1] = useState('');
    const handleInput = (e) => {
        switch(e.target.id) {
            case 'node1': 
                setvalueInputNode1(e.target.value)
                break;
            default: 
                break;
        };        
    }

    return (
        <Col xs lg="3">
            <Sidebar>
                <NodeInfo>
                    <h5>Характеристики</h5>
                    <hr />
                    {
                        props.selected?
                        <ul>
                            <li>Id: {props.selected.id}</li>
                            <li>Title: {props.selected.title}</li>
                        </ul>:
                        <></>
                    }
                </NodeInfo>
                <div className='form'>
                    <h5>Oбновить Node</h5>
                    <hr />
                    <Form onSubmit={props.updateNode}>
                        <Form.Group controlId="node1">
                            <Form.Label>Обновить название </Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Введите название Node " 
                                onChange={handleInput} 
                                value={valueInputNode1}
                                required 
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" >
                            Сохранить
                        </Button>
                    </Form>
                </div>
            </Sidebar>
        </Col>        
    )        
}
