import React, { useContext, useEffect, useState } from 'react'
import './CountryDetail.css'
import { Link, useLocation, useParams } from 'react-router-dom'
import CountryDetailSimmer from './CountryDetailSimmer'
import { ThemeContext } from '../context/ThemeContext'
import useTheme from '../Hooks/Theme'
export default function CountryDetail() {
  const {state} = useLocation()
  const [theme] =useTheme()
  const params = useParams()
  const countryName = params.country
  const [countryData, setCountryData] = useState(null)
  const [notFound, setNotFound] = useState(false)
  function UpdateData(data){
    setCountryData({
      name: data.name.common,
      nativeName: Object.values(data.name.nativeName)[0].common,
      population: data.population,
      Region: data.region,
      flag: data.flags.svg,
      subRegion: data.subregion,
      capital: data.capital,
      topLevelDomain: data.tld.join(','),
      currencies: Object.values(data.currencies).map((currency)=> currency.name)
      .join(', '),
      languages: Object.values(data.languages).join(', '),
      borders: []
  })
  if(!data.borders){
    data.borders = []
  }
  Promise.all(data.borders.map((border)=>{
    return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
    .then((res)=> res.json())
    .then(([borderCountry]) => borderCountry.name.common)
  })).then((borders)=>{
      setTimeout(()=>{
        setCountryData((prevData) => ({...prevData, borders}))
      })
  })
  }
  useEffect(()=>{
    if(state){
        UpdateData(state)
        return
    }
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((res) => res.json())
    .then(([data])=>{
        UpdateData(data)
     })
     .catch((error)=>{
        setNotFound(true)
     })
  }, [countryName])

  if(notFound){
    return(
      <h1>{countryName} , Country not Found</h1>
    )
  }
  return(
    countryData===null?(<main className={`${theme?'dark': ''}`}><CountryDetailSimmer/></main>):<main className={`${theme?'dark': ''}`}>
      <div className="country-details-container">
        <span className="back-button" onClick={()=> history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name} flag`} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: {countryData.nativeName}</b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>
                  Population: {countryData.population.toLocaleString('en-IN')}
                </b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: {countryData.Region} </b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region: {countryData.subRegion} </b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital: {(countryData.capital).join(', ')} </b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain: {countryData.topLevelDomain} </b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>Currencies: {countryData.currencies} </b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>Languages: {countryData.languages} </b>
                <span className="languages"></span>
              </p>
            </div>
            {countryData.borders.length!==0 && <div className="border-countries">
              <b>Border Countries: </b>&nbsp;
              {
                countryData.borders.map((border)=>
                <Link key={border} to={`/${border}`}>{border}</Link>
                )
              }
            </div>}
          </div>
        </div>
      </div>
    </main>
  )
}