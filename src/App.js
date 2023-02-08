// import logo from './logo.svg';
import Form from './components/Form';
import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import Todolist from './components/Todolist';



function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
    <Header />
    <Form
    input = {input}
    setInput = {setInput}
    todos = {todos}  
    setTodos = {setTodos}
    />
    <Todolist todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
