import { data } from "autoprefixer";
import React from "react";
import planetsFactsFile from "./utils/planetsFact.js"

const PlanetTheme = React.createContext()

function PlanetThemeContextProvider(props){

    const [planetsFacts, setPlanetsFacts] = React.useState({ "name": "mars", "one" : "From time to time, winds on Mars are strong enough to create dust storms, covering most of the planet while taking months for all the dust to settle.", "two" : "Through continuous observations and analysis, it is strongly believed that Mars was once very similar to Earth, possessing water or even whole oceans." })
    const [planet, setPlanet] = React.useState({selected: "mars", first: "marsOne", second: "marsTwo", cta: "marsCta", border: "marsBorder"})
    const [planetInfo, setPlanetInfo] = React.useState({
        gravity: 3.71,
        temperature: 45,
        moons: [0, 1] ,
        axialTilt: 25.19 ,
        sideralOrbit: 686,
        density: 3.934,
        eccentricity: "0.0935"})

    function togglePlanet(name){

        let planetFacts = planetsFactsFile.data.planets
        const found = planetFacts.find(planet => planet.name == name)
        setPlanetsFacts(found)

        fetch(`https://api.le-systeme-solaire.net/rest/bodies/${name}`)
        .then((response) => response.json())
        .then((data) => {

            let kelvin = data.avgTemp
            let toFarenheit = Math.trunc((kelvin-273.15)*1.8)+32
            let sideralOrbit = Math.trunc(data.sideralOrbit)
            let kgDensity = (data.density)*1000

            setPlanetInfo(prevState => ({
                ...prevState,
                gravity: data.gravity,
                temperature: toFarenheit,
                moons: data.moons,
                axialTilt: data.axialTilt,
                sideralOrbit: sideralOrbit,
                density: kgDensity,
                eccentricity: data.eccentricity
            }))
        })

        setPlanet(prevState => ({
            ...prevState,
            selected: [`${name}`],
            first: [`${name}One`],
            second: [`${name}Two`],
            cta: [`${name}Cta`],
            border: [`${name}Border`]
        }))

    }

    return (
        <PlanetTheme.Provider value={{planet, planetInfo, planetsFacts, togglePlanet}}>
            {props.children}
        </PlanetTheme.Provider>
    )
}

export {PlanetThemeContextProvider, PlanetTheme}