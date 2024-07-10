
import React from "react"
import './CountryListSimmer.css'
const CountryListSimmer=()=>{
    // const array = new Array(10).fill(1)
    const array = Array.from({length: 10}).map((el, i)=>{
        return <div key={i} className="country-card simmer-card">
        <div className="img-continer imgSimmer"></div>
        <div className="card-text">
            <h3 className="card-title titleSimmer"></h3>
            <p className="pargraph pargraphSimmer"></p>
            <p className="pargraph pargraphSimmer"></p>
            <p className="pargraph pargraphSimmer"></p>
        </div>
        </div>
    })
    return (
        <div className="contriy-continer">
            {
                array   
            }
        </div>                  
    )
}

export default CountryListSimmer