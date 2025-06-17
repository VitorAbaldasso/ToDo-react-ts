import rocket from "../assets/rocket.png"
import styles from "./Header.module.css"

export function Header(){
  return (
    <header className={styles.header}>
      <p>
        SEI ALAAA
      </p>
      <img src={rocket} alt="Logotipo-Todo"/>
    </header>
  )
}