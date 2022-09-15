import React from "react"

export default function Dice(props) {
    return(
        <div className="dice-boxes">
            <h1 className="dice-num">{props.value}</h1>
        </div>
    )
}