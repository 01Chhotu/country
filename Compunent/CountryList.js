import Card from "./Card"
import React, {useEffect, useState } from "react"
import CountryListSimmer from "./CountryListSimmer"
const CountryList = ({quary}) => {
    const apiUrl = 'https://restcountries.com/v3.1/all'
    const [coutries, setCountries] = useState([])
    useEffect(() => {
        fetch(apiUrl).then(res => res.json())
            .then((data => setCountries(data)))
    }, [])
    if(!coutries.length){
        return <CountryListSimmer/>
    }
    return (
        <>
            <div className="contriy-continer">
                {
                    coutries.filter((countryName) => countryName.name.common.toLowerCase().includes(quary) 
                    || countryName.region.toLowerCase().includes(quary)).map((item, i)=> (
                        // console.log(item),
                        <Card
                            key={i}
                            imagrTitle={item.name.common}
                            image={item.flags.svg}
                            capital={item.capital}
                            region={item.region}
                            population={item.population.toLocaleString('en-IN')}
                            data = {item}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default CountryList