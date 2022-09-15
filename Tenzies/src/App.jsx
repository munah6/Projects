import React from "react"
import Dice from "./components/Dice"

export default function App() {
  return (
      <main >
          <div className="dice-container">
              <Dice value={Math.floor(Math.random()*6)}/>
              <Dice value={Math.floor(Math.random()*6)}/>
              <Dice value={Math.floor(Math.random()*6)}/>
              <Dice value={Math.floor(Math.random()*6)}/>
              <Dice value={Math.floor(Math.random()*6)}/>
              <Dice value={Math.floor(Math.random()*6)}/>
              <Dice value={Math.floor(Math.random()*6)}/>
              <Dice value={Math.floor(Math.random()*6)}/>
              <Dice value={Math.floor(Math.random()*6)}/>
              <Dice value={Math.floor(Math.random()*6)}/>
          </div>
      </main>
  )
}
