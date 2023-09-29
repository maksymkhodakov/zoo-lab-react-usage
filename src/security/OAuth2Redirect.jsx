import Interceptor from "./interceptorRequest";
import {useEffect, useState} from "react";
import {apiClient} from "./apiClient";
import CountryInfo from "./CountryInfo";
import styled from 'styled-components';

const WhiteTextContainer = styled.div`
  color: white;
`;

export default function OAuth2Redirect() {
    const [countryData, setCountryData] = useState([]);

    useEffect(() => {
        async function authenticate() {
            try {
                const tokenFromUrl = await getParameterFromUrl("token");
                Interceptor(tokenFromUrl);
                if (tokenFromUrl) {
                    Interceptor(tokenFromUrl);
                    const response = await apiClient.get("/api/country/getAll");
                    console.log(response);
                    setCountryData(response.data.data);
                }
            } catch (error) {
                console.log(error);
            }
        }

        authenticate();
    }, []);

    async function getParameterFromUrl(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        const regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
        const results = regex.exec(window.location.search);
        return results === null ? "" : results[1];
    }


    return (
        <WhiteTextContainer style={{
            backgroundImage: "url('https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}>
            <div className="country-container">
                {countryData.map(country => (
                    <CountryInfo key={country.id} countryData={country}/>
                ))}
            </div>
        </WhiteTextContainer>
    );
}





