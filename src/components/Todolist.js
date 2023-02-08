import React from 'react';
import './Todolist.css';

function Todolist({todos, setTodos}) {
    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    return (
        <div>
        {todos.map((todo) => (
            <ul>
            <li className='list-item' key={todo.id}>
            <input type='text' value={todo.title} className='list' 
            onChange={(event) => (event.preventDefault())}/>
            <button className='todo-delete' onClick={() => handleDelete(todo)}>x</button>
            </li>
            </ul>
        )
        )}
        </div>
    );
}

export default Todolist;