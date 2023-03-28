import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import {PlanetTheme} from "../PlanetThemeContext"
import FadeInSection from '../utils/FadeInSection'

function Homepage() {
  const {planet, planetsFacts, planetInfo} = useContext(PlanetTheme)
  return (
    <div>
      <FadeInSection>
        <div className='flex justify-between items-center' id="intro">
          <div className='md:mt-64 md:mb-32 md:mx-32 my-16 mx-4 flex flex-col items-center'>
              <h1 className={`${planet.second} md:text-6xl text-3xl md:mb-0 mb-16 text-center md:leading-tighft`}>Hello, I'm Gaia, and I'm a <span className={`${planet.first}`}>Front-end Developer</span>. After many years as a <span className={`${planet.first}`}>Digital Designer</span>, my passion is to to create engaging and visually pleasing digital experiences. Welcome to my universe.</h1>
              <Link
                  smooth={true}
                  offset={-70}
                  duration={1500}
                  className={`${planet.first} md:m-16 md:w-1/3 w-full`}
                  to="/#projects"
              >
                <h5 className={`${planet.first} ${planet.cta}2 p-5 md:text-lg text-sm text-center`}>THINGS I'VE CREATED <span className={`arrow-hp ${planet.border} ml-2 right`}></span></h5>
              </Link>
          </div>
        </div>
    </FadeInSection>
    {/* things I've done */}

      <div className='projects md:mt-64 md:mx-64 mx-4' id="work">
          <FadeInSection>
            <div className='mb:my-32 my-16'>
                <h2 className={`${planet.first} md:text-4xl text-2xl text-center md:text-left uppercase`}>what I’ve designed & built:</h2>
            </div>
          </FadeInSection>

        <div className='flex-col'>
          {/* Private Sale */}
          <FadeInSection>
            <div className='project md:flex text-white md:mb-40 mb-16 items-center w-full'>
              <div className='thumb md:w-5/12 w-full'>
                <img className="w-7/12 mx-auto md:pb-0 pb-8" src='./projects/ledger-hp-preview.svg'></img>
              </div>
              <div className='md:w-7/12 left-4'>
                <h2 className={`${planet.first} md:text-3xl text-xl uppercase`}>LEDGER BANKING</h2>
                <h5 className='md:text-lg text-sm font-light my-2'>UI - UX, Development</h5>
                <div className={`${planet.second} font-light md:text-lg text-sm`}><span className='mr-8'>REACT.JS</span><span className='mr-8'>FIREBASE</span><span>TAILWIND</span></div>
                <p className='md:mt-8 mt-4 md:text-lg md:leading-relaxed leading-relaxed text-sm md:tracking-wide tracking-wide'>A ui-friendly banking app. Create your account and access it everywhere, from every device!
                </p>
                  <div className='md:flex w-full'>
                    <div className={`cta md:py-5 w-full mr-8`}>
                      <Link to="/privatesale">
                          <h5 className={`${planet.first} ${planet.cta}2 p-5 md:text-lg text-sm uppercase text-center`}>view&nbsp;project <span className={`arrow-hp ${planet.border} ml-2 right`}></span></h5>
                      </Link>
                    </div>
                    <div className={`cta md:py-5 w-full mr-8`}>
                      <a href='https://superlative-tiramisu-d2e8f7.netlify.app/' target="_blank">
                        <h5 className={`${planet.first} ${planet.cta}2 p-5 md:text-lg text-sm uppercase text-center`}>live&nbsp;site<span className={`arrow-hp newTab ${planet.border} ml-4 right`}></span></h5>
                      </a>
                    </div>
                </div>
              </div>
            </div>
          </FadeInSection>

        </div>

        <div className='flex-col'>
          {/* wheels app */}
          <FadeInSection>
            <div className='project md:flex text-white md:mb-40 mb-16 items-center w-full'>
              <div className='thumb md:w-5/12 w-full'>
                <img className="w-full md:pr-8 md:pb-0 pb-4" src='./projects/WA-arrival.png'></img>
              </div>
              <div className='md:w-7/12 left-4'>
                <h2 className={`${planet.first} md:text-3xl text-xl uppercase`}>WHEELS APP</h2>
                <h5 className='md:text-lg text-sm font-light my-2'>UI - UX, Development</h5>
                <div className={`${planet.second} font-light md:text-lg text-sm`}><span className='mr-8'>REACT.JS</span><span className='mr-8'>API</span><span>CSS</span></div>
                <p className='md:mt-8 mt-4 md:text-lg md:leading-relaxed leading-relaxed text-sm md:tracking-wide tracking-wide'>Wouldn’t it be great to have a “smart” ticket that tells you what is your arrival terminal, gate number, and maybe even if you’ll face delays and the weather condition at destination?
                All in the same place? That's what I had in mind when I created Wheels App: works on all flights currently in the air!
                </p>
                  <div className='md:flex w-full'>
                    <div className={`cta md:py-5 w-full mr-8`}>
                      <Link to="/wheelsapp">
                          <h5 className={`${planet.first} ${planet.cta}2 p-5 md:text-lg text-sm uppercase text-center`}>view&nbsp;project <span className={`arrow-hp ${planet.border} ml-2 right`}></span></h5>
                      </Link>
                    </div>
                    <div className={`cta md:py-5 w-full mr-8`}>
                    <h5 className={`${planet.first} ${planet.cta}2 p-5 md:text-lg text-sm uppercase text-center`}>live&nbsp;site<span className={`arrow-hp newTab ${planet.border} ml-4 right`}></span></h5>
                    </div>
                </div>
              </div>
            </div>
          </FadeInSection>

        </div>


        <div className='flex-col'>
          {/* Private Sale */}
          <FadeInSection>
            <div className='project md:flex text-white md:mb-40 mb-16 items-center w-full'>
              <div className='thumb md:w-5/12 w-full'>
                <img className="w-7/12 mx-auto md:pb-0 pb-8" src='./projects/ecomm-hp-preview.gif'></img>
              </div>
              <div className='md:w-7/12 left-4'>
                <h2 className={`${planet.first} md:text-3xl text-xl uppercase`}>PRIVATE SALE</h2>
                <h5 className='md:text-lg text-sm font-light my-2'>UI - UX, Development</h5>
                <div className={`${planet.second} font-light md:text-lg text-sm`}><span className='mr-8'>REACT.JS</span><span className='mr-8'>API</span><span>TAILWIND</span></div>
                <p className='md:mt-8 mt-4 md:text-lg md:leading-relaxed leading-relaxed text-sm md:tracking-wide tracking-wide'>A clone of an Ecommerce website created with React.js. Add your favorite items in the basket and check out!
                </p>
                  <div className='md:flex w-full'>
                    <div className={`cta md:py-5 w-full mr-8`}>
                      <Link to="/privatesale">
                          <h5 className={`${planet.first} ${planet.cta}2 p-5 md:text-lg text-sm uppercase text-center`}>view&nbsp;project <span className={`arrow-hp ${planet.border} ml-2 right`}></span></h5>
                      </Link>
                    </div>
                    <div className={`cta md:py-5 w-full mr-8`}>
                      <a href='https://superlative-tiramisu-d2e8f7.netlify.app/' target="_blank">
                        <h5 className={`${planet.first} ${planet.cta}2 p-5 md:text-lg text-sm uppercase text-center`}>live&nbsp;site<span className={`arrow-hp newTab ${planet.border} ml-4 right`}></span></h5>
                      </a>
                    </div>
                </div>
              </div>
            </div>
          </FadeInSection>

        </div>


        {/* see more CTA*/}
        {/*
        <FadeInSection>
          <div className={`cta mx-auto my-32 md:p-5 p-3 ${planet.cta} md:w-1/3 w-full`}>
            <h5 className={`${planet.first} md:text-lg text-sm text-center uppercase`}>See more</h5>
          </div>
        </FadeInSection>
        */}
      </div>

      {/* about me */}
      <FadeInSection>
        <div className='flex justify-between items-center mx-4' id="about">
          <div className='md:mt-64 mt-16 mb-32 md:mx-64 md:flex flex-col items-end'>
              <h1 className={`${planet.first} md:text-4xl text-2xl text-center md:text-left uppercase my-8`}>about me</h1>
              <div className='xl:w-2/3'>
                <h2 className='md:text-2xl text-lg md:text-right text-center'>
                After being a digital designer for a long time, becoming a front-end developer was just the natural progression. I love being able to create digital experiences that are useful, clean-coded and solve real-life problems while keeping the highest standard in terms of interface and experience for the user.</h2>
                <h2 className='md:text-2xl text-lg md:text-right text-center mt-4'>I have a Master in Communication Design from Central Saint Martins - University of the Arts London, and I recently got a certification from MIT in Front-End Development with React.js.</h2>
                <h2 className='md:text-2xl text-lg md:text-right text-center mt-4'>After having the luck to live and experience different cultures in many cities between Europe, the Middle East and I am now based in Washington DC, US.</h2>
                <h2 className='md:text-2xl text-lg md:text-right text-center mt-4'>Beside design and technology, I'm passionate about space exploration, I love brazilian jiu-jitsu and I do my best in helping animal rescuing.</h2>
              </div>
              <div className={`cta ${planet.cta} md:p-5 p-3 my-16 md:w-1/3 w-full`}>
                <a href='https://drive.google.com/file/d/1QCaxTbun2YS9qjNBt4rXqEy1SurFpXPo/view' target='_blank'>
                  <h5 className={`${planet.first} md:text-lg text-sm text-center`}>DOWNLOAD RESUME / CV</h5>
                </a>
              </div>
          </div>
        </div>
      </FadeInSection>

      {/* endorsement */}
      {/*
      <FadeInSection>
        <div className='flex justify-between items-center mx-4'>
          <div className='md:mt-64 md:mb-32 md:mx-64 md:flex flex-col items-center'>
            <h1 className={`${planet.first} md:text-4xl text-xl text-center md:text-left uppercase my-8`}>what they say about me</h1>
            <div className='endorsement flex-col justify-end'>
              <h2 className='text-white md:text-2xl text-xl text-center'>Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip, space exploration, animal rescue & jiu-jitsu white belt ex ea commodo consequat.</h2>
              <p className={`md:text-right text-center ${planet.second} my-8`}>Someone Lastname, Working as</p>
            </div>
          </div>
        </div>
      </FadeInSection>
      */}


      {/* planet info */}
      <FadeInSection>
        <div className='planet-info h-[50vh]'>

          <div className='relative overflow-x-clip md:h-[45%] h-[50%] md:z-10 z-0'>
            <div className='absolute md:w-5/12 w-full md:-right-32 -right-16'>
              <img className='w-full drop-shadow-[0_5px_14px_rgba(0,0,0,1)]' src={`./${planet.selected}-zoom.png`}/>
            </div>
          </div>

          <div className='relative md:z-0 z-10'>

            <div className="scroll bg-black fact h-16 border-b-[0.1px] border-t-[0.1px] border-white-100 border-opacity-20">
              <div className="scroll-copy">
                <div className="facts">
                  <h2 className='md:text-2xl text-lg font-light md:text-right text-center pr-4'>{planetsFacts.one}</h2>
                  <h2 className='md:text-2xl text-lg md:text-right text-center pr-4'> - </h2>
                  <h2 className='md:text-2xl text-lg font-light md:text-right text-center pr-4'>{planetsFacts.two}</h2>
                  <h2 className='md:text-2xl text-lg md:text-right text-center pr-4'> - </h2>
                  <h2 className='md:text-2xl text-lg font-light md:text-right text-center pr-4'>{planetsFacts.one}</h2>
                  <h2 className='md:text-2xl text-lg md:text-right text-center pr-4'> - </h2>
                  <h2 className='md:text-2xl text-lg font-light md:text-right text-center pr-4'>{planetsFacts.two}</h2>
                  <h2 className='md:text-2xl text-lg md:text-right text-center pr-4'> - </h2>
                </div>
              </div>
            </div>

            <div className="scroll bg-black info h-16 border-b-[0.1px] border-t-[0.1px] border-white-100 border-opacity-20">
              <div className="scroll-copy">
                <div className="info">
                  <h2 className='md:text-2xl text-lg md:text-right text-center pr-4'> Gravity: {planetInfo.gravity} m/s² </h2>
                  <h2 className='md:text-2xl text-lg md:text-right text-center pr-4'> - </h2>
                  <h2 className='md:text-2xl text-lg md:text-right text-center pr-4'> Temperature: {planetInfo.temperature} °F </h2>
                  {planetInfo.moons && <><h2 className='md:text-2xl text-lg md:text-right text-center pr-4'> - </h2> <h2 className='md:text-2xl text-lg md:text-right text-center pr-4'>Moons: {planetInfo.moons.length}</h2></>}
                  <h2 className='md:text-2xl text-lg md:text-right text-center pr-4'> - </h2>
                  <h2 className='md:text-2xl text-lg md:text-right text-center pr-4'> Axial Tilt: {planetInfo.axialTilt} degrees</h2>
                  <h2 className='md:text-2xl text-lg md:text-right text-center pr-4'> - </h2>
                  <h2 className='md:text-2xl text-lg md:text-right text-center pr-4'> Sidereal orbit period: {planetInfo.sideralOrbit} days</h2>
                  <h2 className='md:text-2xl text-lg md:text-right text-center pr-4'> - </h2>
                  <h2 className='md:text-2xl text-lg md:text-right text-center pr-4'> Density: {planetInfo.density} kg/m³</h2>
                  <h2 className='md:text-2xl text-lg md:text-right text-center pr-4'> - </h2>
                  <h2 className='md:text-2xl text-lg md:text-right text-center pr-4'> Eccentricity: {planetInfo.eccentricity}</h2>
                  <h2 className='md:text-2xl text-lg md:text-right text-center pr-4'> - </h2>
                  <h2 className='md:text-2xl text-lg md:text-right text-center pr-4'> Gravity: {planetInfo.gravity} m/s² </h2>
                  <h2 className='md:text-2xl text-lg md:text-right text-center pr-4'> - </h2>
                  <h2 className='md:text-2xl text-lg md:text-right text-center pr-4'> Temperature: {planetInfo.temperature} °F </h2>
                  {planetInfo.moons && <><h2 className='md:text-2xl text-lg md:text-right text-center pr-4'> - </h2> <h2 className='md:text-2xl text-lg md:text-right text-center pr-4'>Moons: {planetInfo.moons.length}</h2></>}
                  <h2 className='md:text-2xl text-lg md:text-right text-center pr-4'> - </h2>
                  <h2 className='md:text-2xl text-lg md:text-right text-center pr-4'> Axial Tilt: {planetInfo.axialTilt} degrees</h2>
                  <h2 className='md:text-2xl text-lg md:text-right text-center pr-4'> - </h2>
                  <h2 className='md:text-2xl text-lg md:text-right text-center pr-4'> Sidereal orbit period: {planetInfo.sideralOrbit} days</h2>
                  <h2 className='md:text-2xl text-lg md:text-right text-center pr-4'> - </h2>
                  <h2 className='md:text-2xl text-lg md:text-right text-center pr-4'> Density: {planetInfo.density} kg/m³</h2>
                  <h2 className='md:text-2xl text-lg md:text-right text-center pr-4'> - </h2>
                  <h2 className='md:text-2xl text-lg md:text-right text-center pr-4'> Eccentricity: {planetInfo.eccentricity}</h2>
                  <h2 className='md:text-2xl text-lg md:text-right text-center pr-4'> - </h2>

                </div>
              </div>
            </div>

          </div>
        </div>
      </FadeInSection>

    </div>
  )
}

export default Homepage