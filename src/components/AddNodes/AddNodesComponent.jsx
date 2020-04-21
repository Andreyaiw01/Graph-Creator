import React, {useState} from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import Sidebar from '../GlobalStyles/Sidebar';
import SubInfo from './style';


export default function AddNodesComponent(props){
    const [valueInputNode1, setvalueInputNode1] = useState('');
    const [valueInputNode2, setvalueInputNode2] = useState('');
    const handleInput = (e) => {
        switch(e.target.id) {
            case 'node1': 
                setvalueInputNode1(e.target.value)
                break;
            case 'node2': 
                setvalueInputNode2(e.target.value)
                break;
            default: 
                break;
        };        
    }
    return (
        <Col xs lg="3">
            <Sidebar>
                <h5>Добавить Node</h5>
                <hr />
                <div className='form'>                
                    <Form onSubmit={props.addNodes}>
                        <Form.Group controlId="node1">
                            <Form.Label>Node 1</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Введите название для Node 1" 
                                onChange={handleInput} 
                                value={valueInputNode1}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="node2">
                            <Form.Label>Node 2</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Введите название для Node 2" 
                                onChange={handleInput} 
                                value={valueInputNode2} 
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" >
                            Добавить
                        </Button>
                    </Form>                
                </div>
                <SubInfo>
                    <h5>Дополнительно</h5>
                    <hr />
                    <p>
                        Добавить Node - введите названия для Node и нажмите кнопку "Добавить".
                    </p>                  
                    <p>
                        Изменить Node - выберите нужную Node, справа появться информация о Node.
                    </p>
                    <p>
                        Перемещение Node (Drag-and-drop) - нажмите на нужную Node и переместите.
                    </p>                    
                    <p>
                        Добавить Edge - выдилете интересующею Node и зажмите клавишу "Shift", протяните мышкой к той Node, корая Вас инетерсует.
                    </p>
                    <p>
                        Удалить Edge - выберите нужную Edge и нажмите "Delete"  
                    </p>                                     
                </SubInfo>
            </Sidebar>
        </Col>        
    )        
}
