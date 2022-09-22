import React from "react"

export default function Dice(props) {

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    return(
        <div className="dice-boxes" style={styles} onClick={props.clickHandler}>
            <h1 className="dice-num">{props.value}</h1>
        </div>
    )
}