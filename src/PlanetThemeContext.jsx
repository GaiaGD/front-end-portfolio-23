import { data } from "autoprefixer";
import React, { useState, useEffect } from "react";
import planetsFactsFile from "./utils/planetsFact.js"

const PlanetTheme = React.createContext()

function PlanetThemeContextProvider(props){

    // defaulting states as Mars
    const [selectedPlanet, setSelectedPlanet] = useState('mars')
    const [planet, setPlanet] = useState({selected: selectedPlanet, first: `${selectedPlanet}One`, second: `${selectedPlanet}Two`, cta: `${selectedPlanet}Cta`, border: `${selectedPlanet}Border`})
    const [planetInfo, setPlanetInfo] = useState({
        gravity: 3.71,
        temperature: 45,
        moons: [0, 1] ,
        axialTilt: 25.19 ,
        sideralOrbit: 686,
        density: 3.934,
        eccentricity: "0.0935"}
    )
    const [planetsFacts, setPlanetsFacts] = useState((planetsFactsFile.data.planets).find(planet => planet.name == 'mars'))

    // checking if a planet has already been selected in a previous session
    useEffect(() => {
        let planetFromStorage = window.localStorage.getItem('selected')
        if(planetFromStorage != null){
            setSelectedPlanet(planetFromStorage)
            setPlanet({selected: selectedPlanet, first: `${selectedPlanet}One`, second: `${selectedPlanet}Two`, cta: `${selectedPlanet}Cta`, border: `${selectedPlanet}Border`})
            // setting the planet info
            fetch(`https://api.le-systeme-solaire.net/rest/bodies/${selectedPlanet}`)
                .then((response) => response.json())
                .then((data) => {
                    let kelvin = data.avgTemp
                    let toFarenheit = Math.trunc((kelvin-273.15)*1.8)+32
                    let sideralOrbit = Math.trunc(data.sideralOrbit)
                    let kgDensity = (data.density)*1000
                    setPlanetInfo(prevState => ({ ...prevState, gravity: data.gravity, temperature: toFarenheit, moons: data.moons, axialTilt: data.axialTilt, sideralOrbit: sideralOrbit, density: kgDensity, eccentricity: data.eccentricity }))
            })
            setPlanetsFacts((planetsFactsFile.data.planets).find(planet => planet.name == selectedPlanet))
        }

    // now toggling the planet changes the state, and the dependency triggers the reload everytime the selectedPlanet state changed
    }, [selectedPlanet])

    // change the selected planet
    function togglePlanet(name){
        localStorage.setItem("selected", name)
        setSelectedPlanet(window.localStorage.getItem('selected'))
    }

    return (
        <PlanetTheme.Provider value={{
            planet,
            planetInfo,
            planetsFacts,
            togglePlanet
        }}>
            {props.children}
        </PlanetTheme.Provider>
    )
}

export {PlanetThemeContextProvider, PlanetTheme}