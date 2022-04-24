
import {useState} from "react";
import Header from './components/Header/Header';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from "./components/TodoList/TodoList"
import './App.css';


function App() {
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="App">
      <Header/>
      <AddTodo todoList={todoList} setTodoList={setTodoList}/>
      <TodoList todoList={todoList}/>
      
    </div>
  );
}

export default App;
