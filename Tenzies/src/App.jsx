import React from "react"
import Dice from "./components/Dice"

export default function App() {

  function allNewDice() {
    const randomTen = []
    
    for(let i = 0; i < 10; i++){
        // Math.ceil will start from 1 instead of 0 like Math.floor - since dice dont have 0
        randomTen.push(Math.ceil(Math.random()*6));
    }

    return randomTen;
  }

  const [diceNumbers, setDiceNumbers] = React.useState(allNewDice);
    
    const diceNumberElements = diceNumbers.map((num) => {
        return(
            <Dice value={num}/>
        )
    })

  return (
      <main >
          <div className="dice-container">
              {diceNumberElements}
          </div>
      </main>
  )
}
