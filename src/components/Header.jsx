import React, { useContext } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { animateScroll as scroll } from "react-scroll";
import { PlanetTheme } from "../PlanetThemeContext"
import FadeInSection from '../utils/FadeInSection'

function Header() {
    const planets = ['mercury', 'venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune']

    const {planet, togglePlanet} = useContext(PlanetTheme)

    const planetsThemes = planets.map(globe => {
        if (globe == planet.selected){
            return (
                <div className="lg:mr-16 sm:mr-10 mr-6" key={globe} id={globe} onClick={(e) => togglePlanet(e.currentTarget.id)}>
                    <img className={`${globe}Glow w-full selectedZoom`} src={`./${globe}.png`}/>
                </div>)
        } else {
            return (
                <div className='lg:mr-16 sm:mr-10 mr-6' key={globe} id={globe} onClick={(e) => togglePlanet(e.currentTarget.id)}>
                    <img className="w-full opacity-30" src={`./${globe}.png`}/>
                </div>
            )
        }
    })

    return (
        <div className='header sticky top-0 z-50 border-b-[0.1px] border-white-100 border-opacity-20 sm:flex justify-between items-center bg-black-200'>

            <div className='md:max-w-xl xl:mx-8 md:mx-2 mx-0 md:mt-8 mt-6 md:mb-8 mb-2'>
                <div className='md:mx-0 mx-4 header-planets flex items-center'>
                    {planetsThemes}
                </div>
            </div>

            <div className='flex justify-between sm:max-w-lg max-w-none md:mx-8 mx-4 mt:m-8 mt-4 mb:m-8 mb-4'>
                <Link
                    smooth={true}
                    offset={-70}
                    duration={1500}
                    className='xs:w-32 w-20'
                    to="/#intro">
                    <h2 className='text-white md:text-lg text-sm text-center'>HOME</h2>
                </Link>
                <Link
                    smooth={true}
                    offset={-70}
                    duration={1500}
                    className='xs:w-32 w-20'
                    to="/#about">
                    <h2 className='text-white md:text-lg text-sm text-center'>ABOUT</h2>
                </Link>
                <Link
                    smooth={true}
                    offset={-70}
                    duration={1500}
                    className='xs:w-32 w-20'
                    to="/#work">
                    <h2 className='text-white md:text-lg text-sm text-center'>WORK</h2>
                </Link>
                <Link
                    smooth={true}
                    offset={-70}
                    duration={1500}
                    className='xs:w-32 w-20'
                    to="/#contact">
                    <h2 className='text-white md:text-lg text-sm text-center'>CONTACT</h2>
                </Link>
            </div>
        </div>
    )
}

export default Header
