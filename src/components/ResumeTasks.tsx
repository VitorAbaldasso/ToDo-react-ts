import styles from './ResumeTask.module.css'

const createdCount: number = 0

const finishedCount: number = 0

export function ResumeTasks(){
  return(
    <div className={styles.container}>
        <div className={styles.titles}>
          <p>
            Tarefas criadas <span>{createdCount}</span>
          </p>

          <p title='Número de tarefas concluídas'>
            Concluidas <span>{finishedCount}</span>
          </p>
        </div>

    </div>
  )
}