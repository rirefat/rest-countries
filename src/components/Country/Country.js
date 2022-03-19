import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,capital,population,region,subregion,continents,flags,area} = props.country;
    return (
        <div className='single-country'>
            <img src={flags.png} title="Flag Image"/>
            <h2>{name.common}</h2>
            <p><strong>Official Name: </strong>{name.official}</p>
            <p><strong>Capital Name: </strong>{capital}</p>
            <p><strong>Population: </strong>{population}</p>
            <p><strong>Area: </strong>{area} sq. km</p>
            <p><strong>Region: </strong>{region}</p>
            <p><strong>Sub-Region: </strong>{subregion}</p>
            <p><strong>Continents: </strong>{continents}</p>
        </div>
    );
};

export default Country;