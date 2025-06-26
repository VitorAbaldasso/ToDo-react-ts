import {  CheckSquare, Trash } from 'phosphor-react'
import styles from '../components/TaskSingle.module.css'

export function TaskSingle(){
  return (
    <div className={styles.TaskArea}>
        
        
        <button className={styles.Check}>
          <CheckSquare/>
        </button>
        
        
        <p>aaaaaa</p>
        
        
          <button className={styles.Trash}>
            <Trash size={20}/>
          </button>
       
    </div>
  )
}
