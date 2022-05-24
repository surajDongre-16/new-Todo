import React from 'react'
import styles from "./style.module.css"

const Completed = ({comp,compTodo}) => {
  // console.log(comp)
  return (
    <div className={styles.bottom}>
        {comp.map((todo)=>(
          <>
            <div className={`${styles.add} ${styles.back}`} key={todo.id}>
              <input className={styles.checkbox} type="checkbox" checked={true}/>
              <label className={styles.comp}>{todo.value}</label>
              <button className={styles.delete} onClick={()=>compTodo(todo.id)}>Delete</button>
            </div>
          </>
          
        ))}  
    
    </div>
  )
}

export default Completed
