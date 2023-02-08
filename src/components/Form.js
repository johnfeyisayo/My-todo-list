import React from 'react';
import './Form.css';
import { v4 as uuidv4} from 'uuid';


function Form({input, setInput, todos, setTodos}) {

    const onInputChange = (event) => {
          setInput(event.target.value)
    }
    const onFormSubmit = (event) => {
        event.preventDefault();
        setTodos([...todos, {id: uuidv4(), title: input }])
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input type='text' className='task-input' placeholder='Title...' value={input} 
            onChange={onInputChange}/>
            <button className='button-add' >Add</button>
        </form>
    );
}

export default Form;