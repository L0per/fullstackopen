import React from 'react'

const Countries = (props) => {
    const filteredCountries = props.countries.filter(country => 
      country.name.toLowerCase().includes(props.countryFilter.toLowerCase())
    )
    
    if (filteredCountries.length > 10) {
      return (
        <div>More than 10 results, please refine your search</div>
      )
    } else if(filteredCountries.length === 1) {
        console.log(filteredCountries)
        return (
          <SingleCountry country={filteredCountries[0]} />
        )
    } else {
        return (
          filteredCountries.map(country =>
            <Country country={country} key={country.name} />
          )
        )
    }
  }

const Country = (props) => <div>{props.country.name}</div>

const SingleCountry = (props) => {
  return (
    <div>
      <h1>{props.country.name}</h1>
      <p>Capital: {props.country.capital}</p>
      <p>Population: {props.country.population}</p>
      <h2>Languages</h2>
      <ul>
        {props.country.languages.map(language => 
          <Languages key={language.name} language={language} />)}
      </ul>
      <img src={props.country.flag} alt='Country Flag' width="400"></img>
    </div>
  )
}

const Languages = (props) => <li>{props.language.name}</li>

  export default Countries