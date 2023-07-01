import { NavLink } from "react-router-dom"
import styles from "./Header.module.css"
import Navbar from "./Navbar"
import MenuResponsive from "./MenuResponsive"

const Header = () => {
  return (
    <header className={styles.header}>
        <div>
            <NavLink to="/">Thasyo.dev</NavLink>
        </div>
        <MenuResponsive/>
        <Navbar/>
    </header>
  )
}

export default Header