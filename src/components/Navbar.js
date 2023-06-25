import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
            <NavLink to="/" className={({isActive}) => (isActive ? styles.active : '')}>Página inicial</NavLink>
            <NavLink to="/about" className={({isActive}) => (isActive ? styles.active : '')}>Sobre</NavLink>
            <NavLink to="/projects" className={({isActive}) => (isActive ? styles.active : '')}>Projetos</NavLink>
            <NavLink to="/freelancer" className={({isActive}) => (isActive ? styles.active : '')}>Freelancer</NavLink>
    </nav>
  )
}

export default Navbar