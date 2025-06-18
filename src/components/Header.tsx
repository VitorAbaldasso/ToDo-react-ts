import rocket from "../assets/rocket.png"
import styles from "./Header.module.css"
export function Header(){
  return (
    <header className={styles.header}>
      
      <img src={rocket} alt="Logotipo-Todo"/>
      
      <p>
        to<span>do</span>
      </p>
    
    </header>
  )
}