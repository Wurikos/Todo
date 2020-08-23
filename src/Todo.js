import React, { useState } from 'react';
import './todo.css';

function Todo() {
   const [todos, setTodos] = useState([])
   const [input, setInput] = useState('')

   const handleInputChange = e =>setInput(e.target.value)

    function addTodoBtn( e){
      todos.push(input)
      console.log(todos)
 
    }
 
  
    


  return (
    <div className="todo">
      <input placeholder="Some todo" className="todo__input"
      value ={input}
      onChange={handleInputChange}
      
      ></input>
      <button  className = 'addTodoBtn'onClick={addTodoBtn}>Добавить</button>
      <ul className="todo__list">
        <li className="todo__list__item">
        </li>
      </ul>
    </div>
  );
}

export default Todo;
