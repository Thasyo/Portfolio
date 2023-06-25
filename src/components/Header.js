import { NavLink } from "react-router-dom"
import styles from "./Header.module.css"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <header className={styles.header}>
        <div>
            <NavLink to="/">Thasyo.dev</NavLink>
        </div>
        <Navbar/>
    </header>
  )
}

export default Header