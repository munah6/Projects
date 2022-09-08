import React from "react";
import "./Card.css"

function Card(props) {
    return (
        // <div className="card--pos">
            <div className="card">
                <img className="card--img" src={props.place.imageUrl}/>

                <div className="card--info">

                    <div className="card--location--info">
                        <p>{(props.place.location).toUpperCase()}</p>
                        <a href={props.place.googleMapsUrl}>View on Google Maps</a>   
                    </div>       
                    <h1 className="navy">{props.place.title}</h1>
                    <p className="navy"><b>{`${props.place.startDate} - ${props.place.endDate}`}</b></p>
                    <p>{props.place.description}</p>
                </div>
            </div>
        // </div>
    )
}

export default Card;