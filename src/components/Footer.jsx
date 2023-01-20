import React, { useContext } from 'react'
import {PlanetTheme} from "../PlanetThemeContext"
import FadeInSection from '../utils/FadeInSection'

function Footer() {
  const {planet} = useContext(PlanetTheme)
  return (
    <FadeInSection>
      <div className='h-[30vh] md:mt-80 mt-40 flex-col content-between'>
        <div id="contacts" className='md:px-64 mx-4 md:mt-48 md:mb-20'>
          <div className='flex-col justify-between mx-auto'>
            <h1 className={`${planet.first} md:text-4xl text-2xl uppercase mb-8 text-center`}>get in touch</h1>
            <div className=''>

              <h2 className={`${planet.second} md:text-2xl text-lg text-center`}>hi.gaiadg@gmail.com</h2>
              <h2 className="md:text-2xl text-lg text-center pt-4">Whether you want to hire me, have a simple question or just want to say hi, drop me a line!</h2>
              <h2 className={`${planet.second} md:text-2xl text-lg text-center pt-16`}>Or find me here:</h2>

              <div className='mt-8 md:mb-0 mb-8 icons contact flex justify-center'>
                <div className='linkedin mr-16'>
                  <a target="_blank" className='' href="https://www.linkedin.com/in/gaia-di-gregorio-bb966044/">
                    <img className="md:h-16 h-10" src='./contact/linkedin.svg'/>
                  </a>
                </div>
                <div className='github'>
                  <a target="_blank" className='' href="https://github.com/gaiagd">
                    <img className="md:h-16 h-10" src='./contact/github.svg'/>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="md:px-32 px-4 py-4 border-t-[0.1px] border-white-100 border-opacity-10 text-center">
          <small className=''>Designed & Built by Gaia DG</small>
        </div>
      </div>
    </FadeInSection>
  )
}

export default Footer
