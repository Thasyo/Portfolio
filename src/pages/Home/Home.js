import styles from "./Home.module.css"
import React from 'react'
import { useNavigate } from "react-router-dom"
import img from "../../assets/thasyoPerfil.jpeg"

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className={styles.home}>
      <div className={styles.rightSide}>
        <img src={img} alt="Foto de Thasyo"  className={styles.img}/>
        <h2>Thasyo Peres</h2>
        <p>Desenvolvedor de Software</p>
      </div>
      <div className={styles.leftSide}>
        <h2>Seja Bem-Vindo!</h2>
        <p>Fique a vontade para conhecer os meus trabalhos, projetos e um pouco sobre mim.</p>
        <button className="btn" onClick={() => navigate("/about")}>Vamos lá</button>
      </div>
    </div>
  )
}

export default Home