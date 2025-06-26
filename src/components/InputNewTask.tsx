import styles from './InputNewTask.module.css'
import {Plus} from 'phosphor-react'
// import { useState } from 'react'

export function InputNewTask() {

 //const[newTask, setNewTask] = useState('');

  return (
    <div>

        <form className={styles.taskForm}>

          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
          />

          <button type='submit'>
            Criar <span><Plus size={18} weight='bold'/></span>
          </button>

          <main>
            
          </main>

        </form>

    </div>


  )
}

