import React from 'react';
import './countryInfo.css';

export default function CountryInfo({countryData}) {
    return (
        <div className="country-info">
            <h1>{countryData.name}</h1>
            <p>Continent: {countryData.continent}</p>
            <div>
                Flag: <br />
                <img src={`data:image/png;base64,${countryData.flag}`} alt={`Flag of ${countryData.name}`}/>
            </div>
            <p>ID: {countryData.id}</p>
        </div>
    );
}
