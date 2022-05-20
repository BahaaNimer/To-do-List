import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'

export default function Todo({ todo, toggleTodo }) {

  function handleTodoClick() {
    toggleTodo(todo.id)
  }

  return (
    <div>
      {/* <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} /> */}
      <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" checked={todo.complete} onChange={handleTodoClick} />
        <FormControl aria-label="Text input with checkbox" value={todo.name} />
      </InputGroup>
      <ListGroup variant="flush">
      </ListGroup>
    </div>
  )
}
