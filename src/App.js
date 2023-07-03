import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const Todo = ({ todo, index, markTodo, removeTodo }) => {
 return (
  <div className="todo">
  <span style={{ textDecoration: todo.isDone ? "line-  through" : "" }}>{todo.label}</span>
  <div>
 <Button variant="outline-success" onClick={() => 
  markTodo(index)}>✓</Button>{' '}
 <Button variant="outline-danger" onClick={() => 
  removeTodo(index)}>✕</Button>
</div>
</div>
);
}

const FormTodo = ({ addTodo }) => {
const [value, setValue] = useState("");
const handleSubmit = e => {
e.preventDefault();
if (!value) return;
addTodo(value);
setValue("");
};

return (
<Form onSubmit={handleSubmit}> 
<Form.Group>
<Form.Label><b>Add Todo</b></Form.Label>
<Form.Control type="text" className="input" value= 
{value} onChange={e => setValue(e.target.value)} 
placeholder="Add new todo" />
</Form.Group>
<Button variant="primary mb-3" type="submit">
Submit
</Button>
</Form>
);
}

const App = () => {
const [todos, setTodos] = useState([
{
label: "This is a sampe todo",
isDone: false
}
]);

const addTodo = label => {
const newTodos = [...todos, { label }];
setTodos(newTodos);
};

const markTodo = index => {
const newTodos = [...todos];
newTodos[index].isDone = true;
setTodos(newTodos);
};

const removeTodo = index => {
const newTodos = [...todos];
newTodos.splice(index, 1);
setTodos(newTodos);
};

return (
<div className="app">
 <div className="container">
  <h1 className="text-center mb-4">Todo List</h1>
  <FormTodo addTodo={addTodo} />
    <div>
    {todos.map((todo, index) => (
     <Card>
       <Card.Body>
         <Todo
         key={index}
         index={index}
         todo={todo}
         markTodo={markTodo}
         removeTodo={removeTodo}
         />
       </Card.Body>
     </Card>
    ))}
   </div>
  </div>
 </div>
);
}

export default App; 