import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import {PlanetTheme} from "../PlanetThemeContext"
import FadeInSection from '../utils/FadeInSection'

function PrivateSale() {
  const {planet} = useContext(PlanetTheme)
  return (
    <div className='project-title md:mt-32 mt-16'>
      {/* intro */}
      <FadeInSection>
        <div className='intro md:mx-64 mx-4'>
          <h5 className={`${planet.first} md:text-5xl text-3xl`}>PRIVATE SALE</h5>
            <div className=''>
              <div className='md:mt-16 mt-8 mb-4'>
                <p className='text-sm md:leading-relaxed leading-relaxed md:tracking-wide tracking-wide'>
                A clone of an Ecommerce website created with React.js and styled with Tailwind.
                </p>
                <p className='text-sm mt-4 md:leading-relaxed leading-relaxed md:tracking-wide tracking-wide'>
                
                </p>
                <p className='text-sm mt-4 md:mb-16 mb-8 md:leading-relaxed leading-relaxed md:tracking-wide tracking-wide'>

                </p>
              </div>
            </div>

        </div>
        <div className='md:flex md:w-2/6 md:mx-64 mx-4'>
            <div className={`py-5 w-full mr-8`}>
              <a href='https://gaiagd.github.io/private-sale-ecomm/' target="_blank">
                <h5 className={`${planet.first} ${planet.cta}2 p-5 md:text-lg text-sm text-center uppercase`}>live&nbsp;site <span className={`arrow-hp ${planet.border} ml-2 newTab`}></span></h5>
              </a>
            </div>
            <div className={`cta py-5 w-full`}>
              <a href='https://github.com/GaiaGD/private-sale-ecomm' target="_blank">
                <h5 className={`${planet.first} ${planet.cta}2 p-5 md:text-lg text-sm text-center uppercase`}>view&nbsp;on&nbsp;github <span className={`arrow-hp ${planet.border} ml-2 newTab`}></span></h5>
              </a>
            </div>
        </div>
      </FadeInSection>

      {/* project imgs */}
      <FadeInSection>
      <div className='md:flex my-16'>
        <div className='md:w-3/6'>
          <img className="my-16 mx-auto w-9/12 md:w-auto max-h-[40rem]" src='./projects/ecommerce_demo.gif' />
        </div>
        <div className='md:w-3/6'>
            <div className='info md:mr-64 mx-4'>
              <h5 className='text-xl font-semibold xl:mx-auto'>Features</h5>
              <p className='text-sm mt-2 mb-4 md:leading-relaxed leading-relaxed xl:mx-auto md:tracking-wide tracking-wide'>
                The homepage features different items you can buy. You can either "like" any of them clicking on the heart icon that appears when hovering on the product or add them to your cart right away clicking on the + icon.
              </p>
              <p className='text-sm mt-2 mb-4 md:leading-relaxed leading-relaxed xl:mx-auto md:tracking-wide tracking-wide'>
                A full heart icon and a cart icon will be then visible anytime if the product has been liked or added to the cart. This way you can toggle on these to either unlike or remove the product from the cart right from the homepage.
              </p>
              <p className='text-sm mt-2 mb-4 md:leading-relaxed leading-relaxed xl:mx-auto md:tracking-wide tracking-wide'>
                Clicking on the product name, you can visit its dedicated page. From there you can add the product to the cart or remove it.
              </p>
              <p className='text-sm mt-2 mb-4 md:leading-relaxed leading-relaxed xl:mx-auto md:tracking-wide tracking-wide'>
                Once in the cart, the items are available anytime, even after refreshing the page or leaving and going back on the website again.  
              </p>
            </div>
            <div className='info md:mr-64 mx-4 mt-8'>
              <h5 className='text-xl font-semibold xl:mx-auto'>How was it build</h5>
              <p className='text-sm mt-2 mb-4 md:leading-relaxed leading-relaxed xl:mx-auto md:tracking-wide tracking-wide'>
                  The items on the page are fetched with an API.
                  Inside the React Context hook, they're stored in a state.
                  React Routers structures the app in a homepage, a dedicated product page and the cart page.
              </p>
              <p className='text-sm mt-2 mb-4 md:leading-relaxed leading-relaxed xl:mx-auto md:tracking-wide tracking-wide'>
                  The Add and the Remove from the cart buttons are defined inside the context too, so they can be evoked in any component at any time that has access to the context.
                  Their function is to store the cart content inside the localStorage property and make them available anytime, even if the user leave the page.
              </p>
              <p className='text-sm mt-2 mb-4 md:leading-relaxed leading-relaxed xl:mx-auto md:tracking-wide tracking-wide'>
                  A custom hook was used to capture the hovering cursor and display the like and add to cart icons.
                  Hooks, context, router, local storage
                </p>
            </div>
            <div className='info mr:mx-64 mx-4'>
              <p className='text-sm mt-2 md:leading-relaxed leading-relaxed xl:mx-auto md:tracking-wide tracking-wide'>
                APIs by: <a className='underline' target="_blank" href='https://fakestoreapi.com/'>fakestoreapi</a>
              </p>
            </div>

            <div className='md:w-6/12 mx-4 mt-8'>
              <div className={`py-5`}>
                <a href='https://gaiagd.github.io/private-sale-ecomm/' target="_blank">
                  <h5 className={`${planet.first} ${planet.cta}2 p-5 md:text-lg text-sm text-center uppercase`}>live&nbsp;site <span className={`arrow-hp ${planet.border} ml-2 newTab`}></span></h5>
                </a>
              </div>
            </div>

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
                <h5 className={`${planet.first} md:text-lg text-sm text-center uppercase`}><span className={`arrow-hp ${planet.border} mr-2 left`}></span>back to home</h5>
              </div>
            </Link>
          </div>
        </div>
      </FadeInSection>

    </div>
  )
}

export default PrivateSale
