import {Header} from './components/Header'
import './global.css'
import {InputNewTask} from './components/InputNewTask'
import {ResumeTasks} from './components/ResumeTasks'
import styles from './App.module.css'
export function App(){
  return(
    <div>
        <Header />

          <div className={styles.wrapper}>

            <InputNewTask/>


             
           <ResumeTasks />


          

          </div>  
      

    </div>
  )
}