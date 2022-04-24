import {useState} from 'react';
import {v4 as uuid} from 'uuid';
import "./AddTodo.css" 

const AddTodo = ({todoList,setTodoList}) => {
    const [inputValue,setInputValue]=useState('');
     


    const handleChange=(event)=>
     setInputValue(event.target.value);

     const addTodo=()=>{
         const newTodo=
         {id:uuid(), text:inputValue};
         const updatedTodoList=[...todoList,newTodo]
         setTodoList(updatedTodoList);
         setInputValue('');

     }
    //  
// console.log("inputValue",inputValue)
// console.log("todoList" , todoList)
    return(
        <div className="add-todo">
            <button onclick={addTodo}>Add</button>
            <input type="text" placeholder=" Add New Todo..." value={inputValue} 
            onChange={handleChange} />
        </div>
    );
};
export default AddTodo;