import Globe from "./Globe"
import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
        <Globe />
        <h4 className={styles.title}>My Travel Journel</h4>
    </header>
  )
}

export default Header