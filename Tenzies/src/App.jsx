import React from "react"
import Dice from "./components/Dice"
import {nanoid} from "nanoid"

export default function App() {

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

  const [diceNumbers, setDiceNumbers] = React.useState(allNewDice);
    
    const diceNumberElements = diceNumbers.map((num) => {
        return(
            <Dice key={num.id} value={num.value}/>
        )
    })

    function rollDice() {
      setDiceNumbers(allNewDice());
    }

  return (
      <main >
          <div className="dice-container">
              {diceNumberElements}
          </div>

          <button className="button-roll" onClick={rollDice}> Roll </button>
      </main>
  )
}
