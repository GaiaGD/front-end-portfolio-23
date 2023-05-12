import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import {PlanetTheme} from "../PlanetThemeContext"
import FadeInSection from '../utils/FadeInSection'

function Wheelsapp() {
  const {planet} = useContext(PlanetTheme)
  return (
    <div className='project-title md:mt-32 mt-16'>
      {/* intro */}
      <FadeInSection>
        <div className='intro md:mx-64 mx-4'>
          <h5 className={`${planet.first} md:text-5xl text-3xl`}>WHEELS APP</h5>
          <div className="md:flex">
            <div className='md:w-2/3'>
              <div className='md:mt-16 mt-8 mb-4'>
                <h5 className='text-xl font-semibold mb-2'>Intro</h5>
                <p className='text-sm md:leading-relaxed leading-relaxed md:tracking-wide tracking-wide'>
                After entering the airline and locations of departure and arrival, you’ll have access to a vast array of information about the flight you want to track. This virtual boarding pass shows you the scheduled time, as well as the actual time of departure and landing, or the eventual delay. WheelsApp also displays the terminal and gate information of both the departure and the arrival airports.
                </p>
                <p className='text-sm mt-4 md:leading-relaxed leading-relaxed md:tracking-wide tracking-wide'>
                This web app also shows the aircraft model, its flight number, and if available a live location of the flight. Lastly you'll also be able to check the weather at either end of the flight. For testing purposes, go to Flightradar24 and select a flight to track!
                </p>
                <p className='text-sm mt-4 md:mb-16 mb-4 md:leading-relaxed leading-relaxed md:tracking-wide tracking-wide'>
                If you don't necessarily have a flight in mind you want to track, you can just look up whaterver is in the air right now on <a className="underline" target="_blank" href='https://www.flightradar24.com/'>Flightradar24.</a>
                </p>
              </div>
            </div>
            <div className='md:w-1/3'>
              <div className='md:pl-16 md:mt-16 mt-8 mb-4'>
                <h5 className='text-xl font-semibold mb-2'>Fun Fact</h5>
                <p className='text-sm md:leading-relaxed leading-relaxed font-light md:tracking-wider tracking-wider'>
                  I've originally developed this web app in 2015 when I started learning coding - it was all built using jQuery!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='md:flex md:w-2/6 md:mx-64 mx-4'>
            <div className={`py-5 w-full mr-8`}>
              <a href='https://gaiagd.github.io/wheels-app/' target="_blank">
                <h5 className={`${planet.first} ${planet.cta}2 p-5 md:text-lg text-sm text-center uppercase`}>live&nbsp;site <span className={`arrow-hp ${planet.border} ml-2 newTab`}></span></h5>
              </a>
            </div>
            <div className={`cta py-5 w-full`}>
              <a href='https://github.com/GaiaGD/wheels-app' target="_blank">
                <h5 className={`${planet.first} ${planet.cta}2 p-5 md:text-lg text-sm text-center uppercase`}>view&nbsp;on&nbsp;github <span className={`arrow-hp ${planet.border} ml-2 right`}></span></h5>
              </a>
            </div>
        </div>
      </FadeInSection>

      {/* project imgs */}
      <FadeInSection>
      <div className='md:flex my-16'>
        <div className='md:w-3/6'>
          <img className="my-16 mx-auto w-9/12 md:w-auto max-h-[40rem]" src='./projects/wheelsapp-demo.gif' />
        </div>
        <div className='md:w-3/6 wheelsapp-case-study md:flex items-center md:pr-64'>
          <div className='w-3/6 mx-auto p-8 lg:p-16'>
            <img className="md:max-w-sm w-full" src='./projects/wa-logo-white.svg' />
          </div>
          <div className='md:w-3/6'>
            <img className="md:max-w-sm w-full" src='./projects/WA-departure.png'/>
            <img className="md:max-w-sm w-full" src='./projects/WA-arrival.png'/>
          </div>
        </div>
      </div>
      </FadeInSection>

      {/* project info */}
      <FadeInSection>
        <div className='mt-40'>
          <div className='info md:mx-64 mx-4'>
            <h5 className='text-xl font-semibold xl:w-2/3 xl:mx-auto'>How was it build</h5>
            <p className='text-sm mt-2 mb-4 md:leading-relaxed leading-relaxed xl:w-2/3 xl:mx-auto md:tracking-wide tracking-wide'>
              This app is built in html, css and react.js and it's able to collect all the possible data for any (almost any!) plane up in the air at this precise moment.
              It relies on different APIs: two flight tracking APIs to gather airports and flight info, one to get pictures of the locations and the arrival, one to get the weather information.
            </p>
            <p className='text-sm mt-2 mb-4 md:leading-relaxed leading-relaxed xl:w-2/3 xl:mx-auto md:tracking-wide tracking-wide'>
              To make it easier for the user, the form has also autocomplete created with RegExp objects for both the departure and arrival airports and the airline.
            </p>
            <p className='text-sm mt-2 mb-4 md:leading-relaxed leading-relaxed xl:w-2/3 xl:mx-auto md:tracking-wide tracking-wide'>
              The status bar that shows how much of the flight has been completed is calculated subtracting the total time passed between the time of departure and the current time to the total flight time.
              All the hours are obviously calculated in UTC to avoid time zone discrepancies.
            </p>
            <p className='text-sm mt-2 mb-4 md:leading-relaxed leading-relaxed xl:w-2/3 xl:mx-auto md:tracking-wide tracking-wide'>
              Please note: the set of data used is free and not for commercial use, and for this reason is sometimes limited. Some flights might not be available or the images of the airports are not the most accurate.
            </p>
            <p className='text-sm mt-2 mb-4 md:leading-relaxed leading-relaxed xl:w-2/3 xl:mx-auto md:tracking-wide tracking-wide'>
              Unfortunately, I am still working on the instance of multiple results - ie: if there are more than one flight in the air for the same day for the same route, like the case of New York to London,
              it's only able to show you the flight that took off the earliest. Stay tuned!
            </p>
          </div>
          <div className='info md:mx-64 mx-4 mt-8'>
            <p className='text-sm mt-2 md:leading-relaxed leading-relaxed xl:w-2/3 xl:mx-auto md:tracking-wide tracking-wide'>
              APIs by: Aerodatabox, Airlabs, Unsplash, Openweathermap</p>
            <p className='text-sm mt-2 mb-4 md:leading-relaxed leading-relaxed xl:w-2/3 xl:mx-auto md:tracking-wide tracking-wide'>
              Airports list by <a className='underline' target="_blank" href='https://github.com/konsalex'>konsalex</a>, Airline codes by <a className='underline' target="_blank" href='https://github.com/npow'>npow</a>
            </p>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className='md:mx-64 mx-4'> 
          <div className="mx-auto md:w-2/6 md:my-32 my-16">
            {/* <Link to="">
              <div className={`cta p-5 w-full ${planet.cta}2`}>
                <h5 className={`${planet.first} md:text-lg text-sm text-center uppercase`}>see all projects</h5>
              </div>
            </Link> */}

            <Link to="/">
              <div className={`mt-8 cta p-5 w-full ${planet.cta}2`}>
                <a href='https://github.com/GaiaGD/wheels-app' target="_blank">
                  <h5 className={`${planet.first} md:text-lg text-sm text-center uppercase`}><span className={`arrow-hp ${planet.border} mr-2 left`}></span>back to home</h5>
                </a>
              </div>
            </Link>
          </div>
        </div>
      </FadeInSection>

    </div>
  )
}

export default Wheelsapp
