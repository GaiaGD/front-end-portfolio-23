import React, { useContext } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { animateScroll as scroll } from "react-scroll";
import {PlanetTheme} from "../PlanetThemeContext"
import FadeInSection from '../utils/FadeInSection'

function Header() {

    const planets = ['mercury', 'venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune']

    const {planet, togglePlanet} = useContext(PlanetTheme)

    const planetsThemes = planets.map(globe => {
        if (globe == planet.selected){
            return (
                <div className="md:mr-16 mr-6" key={globe} id={globe} onClick={(e) => togglePlanet(e.currentTarget.id)}>
                    <img className={`${globe}Glow w-full selectedZoom`} src={`./${globe}.png`}/>
                </div>)
        } else {
            return (
                <div className='md:mr-16 mr-6' key={globe} id={globe} onClick={(e) => togglePlanet(e.currentTarget.id)}>
                    <img className="w-full opacity-30" src={`./${globe}.png`}/>
                </div>
            )
        }
    })

    function scroll(element){
        console.log(element)
        var ele = document.getElementById(element)
        window.scrollTo(ele.offsetLeft,ele.offsetTop)
    }

    return (
        <div className='header sticky top-0 z-50 border-b-[0.1px] border-white-100 border-opacity-20 md:flex justify-between items-center bg-black-200'>

            <div className='md:max-w-xl md:mx-8 md:mt-8 mt-6 md:mb-8 mb-2'>
                <div className='md:mx-0 mx-4 header-planets flex items-center'>
                    {planetsThemes}
                </div>
            </div>

            <div className='flex max-w-lg md:mx-8 mx-4 mt:m-8 mt-4 mb:m-8 mb-4'>
                <Link
                    smooth={true}
                    offset={-70}
                    duration={1500}
                    className='w-32'
                    to="/">
                    <h2 className='text-white md:text-lg text-sm text-center'>HOME</h2>
                </Link>
                <div
                    smooth={true}
                    offset={-70}
                    duration={1500}
                    className='w-32'
                    onClick={scroll('about')}
                    >
                    <h2 className='text-white md:text-lg text-sm text-center'>ABOUT</h2>
                </div>
                <Link
                    smooth={true}
                    offset={-70}
                    duration={1500}
                    className='w-32'
                    to="/">
                    <h2 className='text-white md:text-lg text-sm text-center'>WORK</h2>
                </Link>
                <Link
                    smooth={true}
                    offset={-70}
                    duration={1500}
                    className='w-32'
                    to="/">
                    <h2 className='text-white md:text-lg text-sm text-center'>CONTACT</h2>
                </Link>
            </div>
        </div>
    )
}

export default Header
