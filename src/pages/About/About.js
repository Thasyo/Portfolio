import React from 'react'
import styles from "./About.module.css"
import img from "../../assets/thasyoPerfil.jpeg"
import { Icon } from '@iconify/react'
import html from  "../../assets/html.png"
import css from  "../../assets/css.png"
import js from  "../../assets/js.png"
import reactJs from  "../../assets/react.png"
import nodeJs from  "../../assets/node.png"
import git from  "../../assets/git.png"
import instagram from  "../../assets/instagram.png"
import linkedin from  "../../assets/linkedin.png"
import github from  "../../assets/github.png"
import { useNavigate } from 'react-router-dom'

const About = () => {

  const hardSkillsImages = [
    {id: 1, title: "html", image: html},
    {id: 2, title: "css", image: css},
    {id: 3, title: "js", image: js},
    {id: 4, title: "react", image: reactJs},
    {id: 5, title: "node", image: nodeJs},
    {id: 6, title: "git", image: git},
  ]

  const socialMediasImages = [
    {id: 1, title: "instagram", image: instagram},
    {id: 2, title: "linkedin", image: linkedin},
    {id: 3, title: "github", image: github},
  ]

  const navigate = useNavigate();

  return (
    <div className={styles.about}>

      <div className={styles.profileAndHowKnewTheProgrammationWorld}>

        <div className={styles.rightSide}>
          <img src={img} alt="Foto de Thasyo"  className={styles.img}/>
          <h2>Thasyo Peres</h2>
          <p>Desenvolvedor de Software</p>
        </div>

        <div className={styles.howKnewTheProgrammationWorld}>

          <div>
            <h1 className={styles.title}>Como conheci o mundo da programação?</h1>
          </div>

          <div className={styles.description_title}>
            <p><Icon icon="el:star" className={styles.star}/> Olá! Meu nome é Thasyo, sou desenvolvedor de software. Adentrei nesse mundo de tecnologia em meados de 2020, durante a pandemia, no qual tive a oportunidade de conhecer melhor a internet e suas funcionalidades. A partir disso, conheci o universo do desenvolvimento de software, e fiquei apaixonado em como as coisas se estruturavam e se encaixavam. Então, por meio disso, iniciei meus estudos e me profissionalizei na área.</p>
          </div>

        </div>

      </div>

      <div>

        <div>
          <h1 className={styles.title}>Soft Skills - Habilidades não técnicas</h1>
        </div>

        <div className={styles.description_title}>
          <ul>
            <li><Icon icon="el:star" className={styles.star}/><span><strong>Comunicação:</strong> Tenho ótima capacidade de me comunicar e saber me expressar com facilidade, além de saber ouvir e entender.</span></li>
            <li><Icon icon="el:star" className={styles.star}/><span><strong>Pensamento crítico:</strong> Tenho habilidade de analisar e avaliar situações, e a partir disso, conseguir absorver as melhoras soluções.</span></li>
            <li><Icon icon="el:star" className={styles.star}/><span><strong>Adaptabilidade:</strong> Tenho flexibilidade para me ajustar a novas situações e lidar com mudanças.</span></li>
            <li><Icon icon="el:star" className={styles.star}/><span><strong>Empatia:</strong> Sempre tento me colocar no lugar do próximo, tentando sempre tomar as melhores decisões, com cautela, para ambas as partes.</span></li>
          </ul>
        </div>

      </div>

      <div>

        <div>
          <h1 className={styles.title}>Hard Skills - Habilidades técnicas</h1>
        </div>

        <div>
          {hardSkillsImages.map((techImage) => (
            <img key={techImage.id} src={techImage.image} alt={techImage.title}/>
          ))}
        </div>

      </div>

      <div>

        <div>
          <h1 className={styles.title}>Redes Sociais</h1>
        </div>

        <div>
          {socialMediasImages.map((techImage) => (
            <img key={techImage.id} src={techImage.image} alt={techImage.title}/>
          ))}
        </div>

      </div>

      <div>

        <div>
          <h1 className={styles.title}>Conheça os meus trabalhos</h1>
        </div>

        <button className="btn" onClick={() => navigate("/projects")}>projetos</button>

      </div>
      

    </div>
  )
}

export default About