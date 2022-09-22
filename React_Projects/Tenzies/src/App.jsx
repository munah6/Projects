import React from "react"
import Dice from "./components/Dice"
import {nanoid} from "nanoid"

export default function App() {

    const [dice, setDice] = React.useState(allNewDice);

    function allNewDice() {
        const randomTen = []
        
        for(let i = 0; i < 10; i++){
            // Math.ceil will start from 1 instead of 0 like Math.floor - since dice dont have 0
            randomTen.push({
              value: Math.ceil(Math.random()*6),
              isHeld: false,
              id: nanoid()
            });
        }

        return randomTen;
    }

    function rollDice() {
        setDice(allNewDice());
    }

    function hold(id) {
        
        const updatedDice = dice.map(dice => {
            return {
              ...dice,
              isHeld: (id === dice.id) ? !dice.isHeld : dice.isHeld,
            }
        })

        setDice(updatedDice)
      
    }

    
      
      const diceElements = dice.map((dice) => {
          return(
              <Dice key={dice.id} value={dice.value} isHeld={dice.isHeld} clickHandler={()=>{hold(dice.id)}}/>
          )
      })

      

    return (
        <main >
            <div className="dice-container">
                {diceElements}
            </div>

            <button className="button-roll" onClick={rollDice}> Roll </button>
        </main>
    )
}
