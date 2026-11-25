import { use } from 'react';
import Country from './Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const countries = use(countriesPromise);

    console.log(countries);

    return (
        <div>
            <h1>In the countries: {countries.length}</h1>
            <div className='Countries'>
                {
                countries.map(country => <Country 
                    key={country.cca3.cca3}
                    country={country}></Country>)
            }
            </div>
            {/* using country props */}
        </div>
    );
};

export default Countries;