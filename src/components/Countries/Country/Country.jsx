import React, { useState } from 'react';
 import './country.css'
                // country is a props received

const Country = ({ country,handleVisitedCountries}) => {   
    // console.log(country.area.area)
  console.log(handleVisitedCountries)
    const [visited,setVisited] = useState(false);


    
  const handleVisited = () => {
    setVisited( visited ? false : true)
    // setVisited(!visited)
    handleVisitedCountries()
  }

    return (
        <div className={`country ${visited ? 'country-visited' : 'not-visited'}`}>
            
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt}  />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            
            <p>Area: {country.area.area} {
                 country.area.area > 300000 ? "Big country" : "Small country"                   
                }</p>

             <button onClick={handleVisited}>
                {visited ? 'visited' : 'Not visited'}
                
                </button>  
        </div>
    );
};

export default Country;