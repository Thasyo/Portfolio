import { NavLink } from 'react-router-dom';

import {FiX} from "react-icons/fi";
import styles from "./MenuResponsive.module.css"

import { useMenuContext } from '../context/MenuContext';
import { CiBoxList } from 'react-icons/ci';

const MenuResponsive = () => {

    const stylesMenuReponsive = {
        fontSize: "2em",
        margin: "15px"
    }

    const {isVisible, setIsVisible} = useMenuContext();

    const toogleMenu = () => {
        setIsVisible(!isVisible);
    }

    return (
        
        <div className={styles.my_animation}>
            <span className={styles.icon_open}>
                    <CiBoxList style={stylesMenuReponsive} onClick={() => toogleMenu()}/>
            </span>
            <div className={isVisible ? styles.container_menu_responsive : styles.none}>
                <span className={styles.icon_closed} onClick={() => toogleMenu()}>
                    <FiX style={stylesMenuReponsive}/>
                </span>
                <nav className={styles.nav_menu_responsive}>
                    <NavLink to="/" className={({isActive}) => (isActive ? styles.active : '')}>Página inicial</NavLink>
                    <NavLink to="/about" className={({isActive}) => (isActive ? styles.active : '')}>Sobre</NavLink>
                    <NavLink to="/projects" className={({isActive}) => (isActive ? styles.active : '')}>Projetos</NavLink>
                    <NavLink to="/freelancer" className={({isActive}) => (isActive ? styles.active : '')}>Freelancer</NavLink>
                </nav>
            </div>
        </div>

    )
}

export default MenuResponsive