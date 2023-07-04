import React from 'react'
import { Icon } from '@iconify/react';
import styles from './Freelancer.module.css'

const Freelancer = () => {
  return (
    <>
      <div>

        <div>

          <div>
            <h1><span>#</span>Freelancer</h1>
          </div>

          <div>
            <ul>
              <li><Icon icon="el:star"/>Tem um projeto e mente?</li>
              <li><Icon icon="el:star"/>Quer colocá-lo em prática?</li>
              <li><Icon icon="el:star"/>Quer tornar realidade os teus objetivos?</li>
              <li><Icon icon="el:star"/>Entre em contato comigo!</li>
            </ul>
          </div>

        </div>

        <div>

          <div>
            <h1>Meios de contato:</h1>
          </div>

          <div>
            <a href="https://www.instagram.com/thasyotp/" target='_blank'><Icon icon="skill-icons:instagram" /></a>
            <a href="https://www.linkedin.com/in/thasyo-peres-63aa27235/" target='_blank'><Icon icon="skill-icons:linkedin" /></a>
            <a href="mailto:thasyotp2002@gmail.com" target='_blank'><Icon icon="logos:google-gmail" /></a>
          </div>

        </div>

      </div>
    </>
  )
}

export default Freelancer