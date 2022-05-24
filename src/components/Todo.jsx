import React, {useState} from 'react'
import Completed from './Completed'
import TodoItem from './TodoItem'
import TodoList from './TodoList'
import styles from "./style.module.css"


const Todo = () => {

    const [value,setValue]=useState("")
    const [todos,setTodos]=useState([])
    const [show,setShow]=useState([])

    const [comp,setComp]=useState([])

    const deleteTodo=(id)=>{
        setTodos(todos.filter((todo)=> todo.id !== id))
    }
    const compTodo=(id)=>{
        setComp(comp.filter((todo)=> todo.id !== id))
        setShow(show.filter((todo)=> todo.id !== id))
    }

    const display=(id)=>{
        const realValue = todos.filter((newTodo)=>{
            if(newTodo.id == id){
                setShow([...show,newTodo])
            }
            return id != newTodo.id
        })

        setTodos(realValue)
    }


  return (
    <div className={styles.box}>
        <h1>Todo App</h1>
        <input className={styles.input_box} placeholder='Write Something' value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button className={styles.btn} onClick={()=>{
        setTodos([...todos,{
            id : Date.now(),
            value : value,
            isCompleted: false
        }])
        setValue("")
    }}>+</button>

    <TodoList>
        <div>
            {todos.map((todo)=>(
                <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} display={display}/>
            ))}
        </div>
        
    </TodoList>
    <div >
        <button className={styles.complete} onClick={()=>{
            setComp([...show])
        }}>Show Completed Todos</button>

        <Completed comp={comp} compTodo={compTodo}/>
    </div>

    </div>
  )
}

export default Todo