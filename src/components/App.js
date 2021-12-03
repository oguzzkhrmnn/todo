import { Button, Container, Row,Form,Col, FormLabel } from 'react-bootstrap';
import Todos from "../components/Todos"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


function App() {
  const [ToDoItemFlag,setToDoItemFlag]=useState(false);
  const [ToDoItem,setToDoItem]=useState("");
  const OnToDoSubmit= (event) => {
    setToDoItem(event.target.value);

  };
  
  const OnToDoSend= () => {
    setToDoItemFlag(true);

  };
 return (
    <Container className="App">
      <Row className="my-5">
    <Col>
    <h1>To Do App</h1>
    </Col>
  <Row className="my-5">
   <Col>
     <FormLabel>To Do Enter</FormLabel>
    </Col>
    <Col>
    <Form.Control type="email" placeholder="Enter email" onChange={(e)=> OnToDoSubmit(e)}/>
    </Col>
    <Col>
  <Button variant="primary" type="submit" onClick={OnToDoSend}>
   <FontAwesomeIcon icon={faSpinner}  style={{color:"#FFE4C4"}} />
  </Button>
  </Col>
  </Row>
  </Row>
  <Row>
    <Todos ToDoItemFlag={ToDoItemFlag} ToDoItem={ToDoItem}/>
  </Row>  
    </Container>
  );
}
export default App;
