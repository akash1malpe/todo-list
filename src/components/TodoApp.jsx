import React, { useState , useEffect} from "react";
import "./TodoApp.css";

const TodoApp = () => {


    // for add button
    const [task, setTask] = useState("");
    const [taskList, setTaskList]=useState([]);

    const handleChange = (e) => {
        setTask(e.target.value);
      };

    //   add button onclick event
    const AddTask = () => {
        if(task !== ""){
            const taskDetails = {
                id: Math.floor(Math.random()*1000),
                value:task,
                isCompleted:false,
            };


            setTaskList([...taskList, taskDetails]);
        }

    }

    // complete button onclick event
    const taskCompleted = (e,id) => {
        e.preventDefault();
        
        // finding index of element
        const element = taskList.findIndex((ele) => ele.id === id);
        
        // copying array into new variable
        const NewTaskList = [...taskList]
        
        // editing element
        NewTaskList[element] = {
            ...NewTaskList[element],
            isCompleted:true,
        };
        setTaskList(NewTaskList);
    }
    
    // delete button onclick event
    const deleteTask = (e,id) => {
        e.preventDefault();
        setTaskList(taskList.filter((t) => t.id !== id));
    }

   
  
    return(
        <div className="todo">
            <input type="text" name="text" id="text" onChange={(e) => handleChange(e)} placeholder="Add Task here....." />

            <button className="add-btn" onClick={AddTask}>Add</button>
            {taskList !== [] ?(

        <ul>
             {taskList.map((t) => (
            <li className={t.isCompleted ?"crossText" : "listitem"}>
                {t.value}
            <button className="completed" onClick={(e) =>  taskCompleted(e, t.id)}>Completed</button>

            <button className="delete" onClick={(e) => deleteTask(e, t.id)}>Delete </button>
            </li>
            ))}
            </ul>
            ) : null}
             

        </div>
    );
}

export default TodoApp;