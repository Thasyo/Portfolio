import React from 'react'
import styles from "./Projects.module.css"

const Projects = () => {

  return (
    <div className={styles.projects}>

      <h1 className={styles.title}>Projetos</h1>

      <div className={styles.carousel} >

        <div className={styles.item}>

          <div className={styles.left_side}>
            <img src="" alt="Imagem do projeto" />
            <p>Nome do projeto</p>
            <div className={styles.links_project}>
              <a href="#" target="_blank" rel="noreferrer" className='btn'>Ver Site</a>
              <a href="#" target="_blank" rel="noreferrer" className='btn'>Repositório</a>
            </div>
          </div>

          <div className={styles.right_side}>
            <div>
              <h3>Descrição</h3>
              <div className={styles.content_description}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque eos vero necessitatibus perspiciatis suscipit animi sapiente hic autem, facere numquam commodi? Similique, harum. Cupiditate error velit alias nobis quo ea.</p>
              </div>
            </div>
            <div>
              <h3>Tecnologias utilizadas</h3>
              <div className={styles.content_techs}>
                <div>
                  <img src="#" alt="imagem da techs utilizadas" />
                  <p>nome da tech</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className={styles.item}>

          <div className={styles.left_side}>
            <img src="" alt="Imagem do projeto" />
            <p>Nome do projeto</p>
            <div className={styles.links_project}>
              <a href="#" target="_blank" rel="noreferrer" className='btn'>Ver Site</a>
              <a href="#" target="_blank" rel="noreferrer" className='btn'>Repositório</a>
            </div>
          </div>

          <div className={styles.right_side}>
            <div>
              <h3>Descrição</h3>
              <div className={styles.content_description}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque eos vero necessitatibus perspiciatis suscipit animi sapiente hic autem, facere numquam commodi? Similique, harum. Cupiditate error velit alias nobis quo ea.</p>
              </div>
            </div>
            <div>
              <h3>Tecnologias utilizadas</h3>
              <div className={styles.content_techs}>
                <div>
                  <img src="#" alt="imagem da techs utilizadas" />
                  <p>nome da tech</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className={styles.item}>

          <div className={styles.left_side}>
            <img src="" alt="Imagem do projeto" />
            <p>Nome do projeto</p>
            <div className={styles.links_project}>
              <a href="#" target="_blank" rel="noreferrer" className='btn'>Ver Site</a>
              <a href="#" target="_blank" rel="noreferrer" className='btn'>Repositório</a>
            </div>
          </div>

          <div className={styles.right_side}>
            <div>
              <h3>Descrição</h3>
              <div className={styles.content_description}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque eos vero necessitatibus perspiciatis suscipit animi sapiente hic autem, facere numquam commodi? Similique, harum. Cupiditate error velit alias nobis quo ea.</p>
              </div>
            </div>
            <div>
              <h3>Tecnologias utilizadas</h3>
              <div className={styles.content_techs}>
                <div>
                  <img src="#" alt="imagem da techs utilizadas" />
                  <p>nome da tech</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Projects