import React from "react"
import { Link} from 'react-router-dom';
const Card = ({image, imagrTitle, population, region, capital, data}) => {
    return (
        <>
        <Link className="country-card card" to={`${imagrTitle}`} state={data}>
        <div className="img-continer">
        <img src={image} alt="flag" />
        </div>
        <div className="card-text">
            <h3 className="card-title">{imagrTitle}</h3>
            <p>
                <b>Population: </b>
                {population}
            </p>
            <p>
                <b>Regin: </b>
                {region}
            </p>
            <p>
                <b>Capital: </b>
                {capital}
            </p>
        </div>
    </Link>
    </>
    )
}

export default Card