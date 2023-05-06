import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import {PlanetTheme} from "../PlanetThemeContext"
import FadeInSection from '../utils/FadeInSection'

function Ledger() {
  const {planet} = useContext(PlanetTheme)
  return (
    <div className='project-title md:mt-32 mt-16'>
      {/* intro */}
      <FadeInSection>
        <div className='intro md:mx-64 mx-4'>
          <h5 className={`${planet.first} md:text-5xl text-3xl`}>LEDGER BANKING</h5>
            <div className=''>
              <div className='md:mt-16 mt-8 mb-4'>
                <p className='md:text-lg text-sm md:leading-relaxed leading-relaxed md:tracking-wide tracking-wide'>
                A UI-friendly banking app for your day-to-day transactions, with a Firestore Database and styled with Tailwind.
                </p>
                <div className={`${planet.second} pt-5 font-light md:text-lg text-sm`}><span className='mr-8'>REACT.JS</span><span className='mr-8'>FIREBASE</span><span>TAILWIND</span></div>
                <p className='md:text-lg text-sm mt-4 md:leading-relaxed leading-relaxed md:tracking-wide tracking-wide'>
                </p>
              </div>
            </div>

        </div>
        <div className='md:flex md:w-2/6 md:mx-64 mx-4'>
            <div className={`py-5 w-full mr-8`}>
              <a href='https://gaiagd.github.io/ledgerbank/' target="_blank">
                <h5 className={`${planet.first} ${planet.cta}2 p-5 md:text-lg text-sm text-center uppercase`}>live&nbsp;site <span className={`arrow-hp ${planet.border} ml-2 newTab`}></span></h5>
              </a>
            </div>
            <div className={`cta py-5 w-full`}>
              <a href='https://github.com/GaiaGD/ledgerbank' target="_blank">
                <h5 className={`${planet.first} ${planet.cta}2 p-5 md:text-lg text-sm text-center uppercase`}>view&nbsp;on&nbsp;github <span className={`arrow-hp ${planet.border} ml-2 newTab`}></span></h5>
              </a>
            </div>
        </div>
      </FadeInSection>

      {/* project imgs */}
      <FadeInSection>
      <div className='md:flex my-16'>
        <div className='md:w-3/6'>
          <img className="my-16 mx-auto w-9/12 md:w-auto max-h-[40rem]" src='./projects/ledger-hp-preview.svg' />
        </div>
        <div className='md:w-3/6'>
            <div className='info md:mr-64 mx-4'>
              <h5 className='text-xl font-semibold xl:mx-auto'>Features</h5>
              <p className='text-sm mt-2 mb-4 md:leading-relaxed leading-relaxed xl:mx-auto md:tracking-wide tracking-wide'>
                The intro page allows the user either create a new banking account or login into an existent one they've created before.
                A bonus starting balance is provided by Ledger bank for both their checking and saving account.
              </p>
              <p className='text-sm mt-2 mb-4 md:leading-relaxed leading-relaxed xl:mx-auto md:tracking-wide tracking-wide'>
                Creating an account requires a username, a valid email, a valid password and a currency. Once created, the account credential and data are safely stored in a Firestore Database. This means that a user can access their? bank account from any device, anytime, from anywhere in the world.
              </p>
              <p className='text-sm mt-2 mb-4 md:leading-relaxed leading-relaxed xl:mx-auto md:tracking-wide tracking-wide'>
                A bonus starting balance is provided by Ledger bank for both their checking and saving account.
              </p>
              <p className='text-sm mt-2 mb-4 md:leading-relaxed leading-relaxed xl:mx-auto md:tracking-wide tracking-wide'>
                Once authenticated, the user has access to a dashboard that allows them to send money within the accounts, as well as depositing and withdrawing funds from them.
              </p>
              <p className='text-sm mt-2 mb-4 md:leading-relaxed leading-relaxed xl:mx-auto md:tracking-wide tracking-wide'>
                All transactions, both between the user's accounts and inside and outside the accounts, are recorded in a transaction history section always available.
              </p>
            </div>
            <div className='info md:mr-64 mx-4 mt-8'>
              <h5 className='text-xl font-semibold xl:mx-auto'>How was it build</h5>
              <p className='text-sm mt-2 mb-4 md:leading-relaxed leading-relaxed xl:mx-auto md:tracking-wide tracking-wide'>
                This app relies on google Firebase authentication and google Firestore database: the current logged-in user and the storage of data related to their accounts are handled in the context.
              </p>
              <p className='text-sm mt-2 mb-4 md:leading-relaxed leading-relaxed xl:mx-auto md:tracking-wide tracking-wide'>
                The firebase method createUserWithEmailAndPassword collects the user email and password and creates a user with authentication rights, while the username, the currency and the current balances will be instead grouped and added to a unique entry in the Firestore database named as the user UID, so it can be easily matched to it.
              </p>
              <p className='text-sm mt-2 mb-4 md:leading-relaxed leading-relaxed xl:mx-auto md:tracking-wide tracking-wide'>
                Alternatively, if the user is trying to login, the signInWithEmailAndPassword method will sort the authentication checking the user credentials (email and password).
              </p>
              <p className='text-sm mt-2 mb-4 md:leading-relaxed leading-relaxed xl:mx-auto md:tracking-wide tracking-wide'>
                Both if the user has just created his account or has just logged in, the onAuthStateChanged callback function placed inside useEffect will automatically trigger: the method getDoc() will retrieve the data linked with the current authenticated user looking for the entry in the database whose name matches the user UID. The data will then be stored in a state and it will be accessible to the interface.
              </p>
              <p className='text-sm mt-2 mb-4 md:leading-relaxed leading-relaxed xl:mx-auto md:tracking-wide tracking-wide'>
                The user has now access to the dashboard that allows them to perform different actions editing the existing data in the database: these includes adding or subtracting amounts from both the accounts, but also passing amounts from one account to another.
                This is made possible by the updateDoc method, that uses the current user authentication UID to update the data of its corresponding entry in the database adding new transactions and updating the value of the balances.
              </p>
              <p className='text-sm mt-2 mb-4 md:leading-relaxed leading-relaxed xl:mx-auto md:tracking-wide tracking-wide'>
                For each change to the database, the already mentioned onAuthStateChanged function will react and fetch the updated data from the database and dispatch it to a state so it’s again available and accessible through the interface.
              </p>
              <p className='text-sm mt-2 mb-4 md:leading-relaxed leading-relaxed xl:mx-auto md:tracking-wide tracking-wide'>
                The navigation is structured in public and private pages: only the logged in user will be able to access their accounts through private routes in the Router.
              </p>
            </div>

            <div className='md:w-6/12 mx-4 mt-8'>
              <div className={`py-5`}>
                <a href='https://gaiagd.github.io/ledgerbank/' target="_blank">
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

export default Ledger
