import React,{useState} from 'react'
import styles from "./style.module.css"

const TodoItem = ({todo,deleteTodo,display}) => {

    const [isCompleted, setIsCompleted]=useState(todo.isCompleted)

  return (
    <div className={styles.add} key={todo.id}>
        <input className={styles.checkbox} type="checkbox" checked={isCompleted} onChange={((e)=>(
          e.target.checked ? display(todo.id) : ""))}/>
        <label>{todo.value}</label>
        <button className={styles.delete} onClick={()=>deleteTodo(todo.id)}>Delete</button>

      
    </div>
  )
}

export default TodoItem