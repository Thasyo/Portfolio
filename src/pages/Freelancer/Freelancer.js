import React from 'react'
import { Icon } from '@iconify/react';
import styles from './Freelancer.module.css'

const Freelancer = () => {
  return (
    <>
      <div className={styles.freelancer}>

        <div>

          <div>
            <h1 className={styles.title}>Freelancer</h1>
          </div>

          <div className={styles.description_title}>
            <ul>
              <li><Icon icon="el:star" className={styles.star}/><span>Tem um projeto em mente?</span></li>
              <li><Icon icon="el:star" className={styles.star}/><span>Deseja colocá-lo em prática?</span></li>
              <li><Icon icon="el:star" className={styles.star}/><span>Quer tornar realidade as tuas ideias?</span></li>
              <li><Icon icon="el:star" className={styles.star}/><span>Entre em contato comigo!</span></li>
            </ul>
          </div>

        </div>

        <div>

          <div>
            <h1 className={styles.title}>Meios de contato:</h1>
          </div>

          <div className={styles.contact_links}>
            <a href="https://www.instagram.com/thasyotp/" target='_blank' rel="noreferrer"><Icon icon="skill-icons:instagram" className={styles.icons_links}/></a>
            <a href="https://www.linkedin.com/in/thasyo-peres-63aa27235/" target='_blank' rel="noreferrer"><Icon icon="skill-icons:linkedin" className={styles.icons_links}/></a>
            <a href="mailto:thasyotp2002@gmail.com" target='_blank' rel="noreferrer"><Icon icon="logos:google-gmail" className={styles.icons_links}/></a>
          </div>

        </div>

      </div>
    </>
  )
}

export default Freelancer